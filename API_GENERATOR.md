# API Client Generator

Этот проект использует автоматическую генерацию типов и API клиента из OpenAPI спецификации Strapi.

## Генерация API клиента

### Команды

```bash
# Полная генерация (скачивание спецификации + генерация типов и сервисов)
pnpm run generate:api

# Только скачивание OpenAPI спецификации
pnpm run generate:api:download
```

### Что генерируется

1. **TypeScript типы** (`src/shared/api/generated/types.ts`)
   - Все типы из OpenAPI спецификации
   - Полная типизация запросов и ответов

2. **API сервисы** (`src/shared/api/generated/services/`)
   - ArticleService
   - AuthorService
   - ProjectService
   - GlobalService
   - HomePageService
   - UploadFileService
   - UsersPermissionsAuthService
   - UsersPermissionsUsersRolesService

3. **Модели** (`src/shared/api/generated/models/`)
   - Все модели данных с типизацией

## Использование

### Импорт сервисов

```typescript
import { ArticleService, ProjectService } from '@/shared/api/client';
```

### Примеры использования

#### Получение списка статей

```typescript
import { ArticleService } from '@/shared/api/client';

// Без параметров
const articles = await ArticleService.getArticles({});

// С параметрами
const articles = await ArticleService.getArticles({
  populate: '*',
  sort: 'createdAt:desc',
  paginationPage: 1,
  paginationPageSize: 10,
  filters: { title: { $contains: 'search' } }
});
```

#### Получение статьи по ID

```typescript
const article = await ArticleService.getArticlesId({ id: 1 });
```

#### Создание статьи

```typescript
const newArticle = await ArticleService.postArticles({
  requestBody: {
    data: {
      title: 'New Article',
      content: 'Article content',
      slug: 'new-article'
    }
  }
});
```

#### Обновление статьи

```typescript
const updatedArticle = await ArticleService.putArticlesId({
  id: 1,
  requestBody: {
    data: {
      title: 'Updated Title'
    }
  }
});
```

#### Удаление статьи

```typescript
await ArticleService.deleteArticlesId({ id: 1 });
```

### Работа с проектами

```typescript
import { ProjectService } from '@/shared/api/client';

// Получить все проекты
const projects = await ProjectService.getProjects({ populate: '*' });

// Получить проект по ID
const project = await ProjectService.getProjectsId({ id: 1 });
```

## Конфигурация

### Базовый URL

Базовый URL настраивается в `src/shared/api/client.ts`:

```typescript
OpenAPI.BASE = 'http://localhost:1337/api';
```

### Добавление токена авторизации

Раскомментируйте и настройте в `src/shared/api/client.ts`:

```typescript
OpenAPI.TOKEN = () => localStorage.getItem('token') || '';
```

## Структура файлов

```
src/shared/api/
├── generated/           # Автоматически сгенерированные файлы
│   ├── types.ts        # TypeScript типы из OpenAPI
│   ├── index.ts        # Главный экспорт
│   ├── core/           # Ядро клиента
│   ├── models/         # Модели данных
│   └── services/       # API сервисы
├── client.ts           # Конфигурация и экспорт API
├── instance.ts         # Axios инстанс (устаревший)
└── const.ts            # Константы
```

## Типизация

Все методы полностью типизированы:

```typescript
// TypeScript автоматически подсказывает доступные параметры
ArticleService.getArticles({
  populate: '*',          // автодополнение
  sort: 'title:asc',      // автодополнение
  paginationPage: 1,      // проверка типов
});
```

## Обработка ошибок

```typescript
import { ApiError } from '@/shared/api/client';

try {
  const article = await ArticleService.getArticlesId({ id: 1 });
} catch (error) {
  if (error instanceof ApiError) {
    console.error('API Error:', error.status, error.message);
  }
}
```

## Технологии

- **openapi-typescript** - генерация TypeScript типов
- **openapi-typescript-codegen** - генерация API клиента
- **Axios** - HTTP клиент

## Важно

- Файлы в `src/shared/api/generated/` генерируются автоматически
- Не редактируйте сгенерированные файлы вручную
- Запускайте `pnpm run generate:api` после изменений в API
- Файл `openapi.json` исключен из git
