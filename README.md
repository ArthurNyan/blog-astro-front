# Blog Astro Front

Современный блог и портфолио на Astro с автоматической генерацией типов из OpenAPI.

## Технологии

- **Astro 5** - Фреймворк для создания статических сайтов
- **React 19** - UI компоненты
- **TailwindCSS 4** - Стилизация
- **TypeScript** - Типизация
- **Axios** - HTTP клиент
- **OpenAPI TypeScript** - Автоматическая генерация типов и API клиента

## Структура проекта

```
├── src/
│   ├── entity/          # Бизнес-логика
│   │   └── Article/     # Сущность Article
│   ├── layouts/         # Макеты страниц
│   ├── pages/           # Страницы приложения
│   │   ├── articles/    # Страницы блога
│   │   └── projects/    # Страницы проектов
│   ├── shared/          # Общие компоненты и утилиты
│   │   ├── api/         # API клиент и типы
│   │   ├── components/  # Переиспользуемые компоненты
│   │   └── hooks/       # React хуки
│   └── widgets/         # Сложные UI виджеты
├── public/              # Статические файлы
└── openapi.json        # OpenAPI спецификация (генерируется)
```

## Установка

```bash
# Установка зависимостей
pnpm install

# Генерация API клиента
pnpm run generate:api

# Запуск dev сервера
pnpm run dev

# Сборка для production
pnpm run build
```

## API Генерация

Проект использует автоматическую генерацию типов и API клиента из OpenAPI спецификации Strapi.

### Команды

```bash
# Полная генерация (скачивание спецификации + генерация типов и сервисов)
pnpm run generate:api

# Только скачивание OpenAPI спецификации
pnpm run generate:api:download
```

Подробнее см. [API_GENERATOR.md](./API_GENERATOR.md)

## Использование API

```typescript
import { ArticleService, ProjectService } from '@/shared/api/client';

// Получение списка статей
const articles = await ArticleService.getArticles({
  populate: '*',
  sort: 'createdAt:desc',
  paginationPage: 1,
  paginationPageSize: 10,
});

// Получение статьи по ID
const article = await ArticleService.getArticlesId({ id: 1 });

// Получение проектов
const projects = await ProjectService.getProjects({ populate: '*' });
```

## Разработка

```bash
# Запуск dev сервера
pnpm run dev

# Сборка
pnpm run build

# Предпросмотр production сборки
pnpm run preview
```

## Линзирование и форматирование

Проект использует ESLint конфигурацию Astro.

## Переменные окружения

Создайте файл `.env` в корне проекта:

```env
# API URL
PUBLIC_API_URL=http://localhost:1337/api
```

## Лицензия

MIT
