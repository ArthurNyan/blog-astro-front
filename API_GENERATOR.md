# API Client Generator

Этот проект использует автоматическую генерацию типов TypeScript из OpenAPI спецификации Strapi.

## Генерация API клиента

### Команды

```bash
# Полная генерация (скачивание спецификации + генерация типов)
pnpm run generate:api

# Только скачивание OpenAPI спецификации
pnpm run generate:api:download
```

### Что генерируется

1. **TypeScript типы** (`src/shared/api/generated/types.ts`)
   - Все типы из OpenAPI спецификации
   - Полная типизация запросов и ответов
   - Автоматически генерируется из swagger документации

2. **API сервисы** (`src/shared/api/generated/services.ts`)
   - Ручная типизированная обертка над axios
   - ArticleService
   - ProjectService
   - AuthorService
   - GlobalService
   - HomePageService

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
const response = await ArticleService.getArticles();
const articles = response.data?.data || [];

// С параметрами
const response = await ArticleService.getArticles({
  populate: '*',
  sort: 'createdAt:desc',
  'pagination[page]': 1,
  'pagination[pageSize]': 10,
});
```

#### Получение статьи по ID

```typescript
const response = await ArticleService.getArticleById(1, {
  populate: '*'
});
const article = response.data?.data;
```

#### Создание статьи

```typescript
const response = await ArticleService.createArticle({
  data: {
    title: 'New Article',
    description: 'Article description',
    slug: 'new-article'
  }
});
```

#### Обновление статьи

```typescript
const response = await ArticleService.updateArticle(1, {
  data: {
    title: 'Updated Title'
  }
});
```

#### Удаление статьи

```typescript
await ArticleService.deleteArticle(1);
```

### Работа с проектами

```typescript
import { ProjectService } from '@/shared/api/client';

// Получить все проекты
const response = await ProjectService.getProjects({ 
  populate: '*' 
});
const projects = response.data?.data || [];

// Получить проект по ID
const response = await ProjectService.getProjectById(1);
const project = response.data?.data;
```

## Структура ответов Strapi

Все ответы Strapi имеют следующую структуру:

```typescript
{
  data: Article | Article[] | null,
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    }
  }
}
```

Поэтому всегда нужно обращаться к `response.data.data`:

```typescript
const response = await ArticleService.getArticles();
const articles = response.data?.data || []; // ← обратите внимание на .data.data
```

## Конфигурация

### Базовый URL

Базовый URL настраивается в `src/shared/api/instance.ts`:

```typescript
export const apiInstance = axios.create({
  baseURL: 'http://localhost:1337/api',
  withCredentials: false,
  timeout: 30000,
});
```

### Добавление токена авторизации

Используйте axios interceptors в `src/shared/api/instance.ts`:

```typescript
apiInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

## Структура файлов

```
src/shared/api/
├── generated/              # Автоматически сгенерированные файлы
│   ├── types.ts           # TypeScript типы из OpenAPI (не редактировать!)
│   └── services.ts        # API сервисы (можно редактировать)
├── client.ts              # Главный экспорт API
├── instance.ts            # Axios инстанс
├── const.ts               # Константы
└── types.ts               # Кастомные расширенные типы
```

## Типизация

Все методы полностью типизированы благодаря OpenAPI:

```typescript
// TypeScript автоматически подсказывает доступные параметры
const response = await ArticleService.getArticles({
  populate: '*',          // автодополнение
  sort: 'title:asc',      // автодополнение
  // TypeScript проверит типы параметров
});

// И типизирует ответ
const articles = response.data?.data; // Article[] | undefined
```

## Обработка ошибок

```typescript
import { AxiosError } from 'axios';

try {
  const response = await ArticleService.getArticleById(1);
  const article = response.data?.data;
} catch (error) {
  if (error instanceof AxiosError) {
    console.error('API Error:', error.response?.status, error.message);
  }
}
```

## Технологии

- **openapi-typescript** (v7.10.1) - генерация TypeScript типов из OpenAPI
- **Axios** (v1.13.4) - HTTP клиент
- Ручная типизированная обертка над axios

## Важно

- Файл `src/shared/api/generated/types.ts` генерируется автоматически - **НЕ РЕДАКТИРУЙТЕ ЕГО**
- Файл `src/shared/api/generated/services.ts` можно редактировать при необходимости
- Запускайте `pnpm run generate:api` после изменений в API
- Файл `openapi.json` исключен из git

## Почему не используется openapi-typescript-codegen?

Первоначально использовался пакет `openapi-typescript-codegen` для автоматической генерации сервисов, но он имеет баги с некоторыми OpenAPI спецификациями (например, генерирует неправильные имена методов типа `postUpload?id=`). 

Вместо этого мы используем только `openapi-typescript` для генерации типов и создаем ручные типизированные обертки над axios, что дает:
- ✅ Полный контроль над API клиентом
- ✅ Отсутствие багов кодогенерации
- ✅ Простоту и читаемость кода
- ✅ Полную типизацию благодаря OpenAPI типам
