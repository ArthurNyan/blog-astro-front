# Astro Blog with shadcn/ui

Современный блог на Astro с использованием React, Tailwind CSS и shadcn/ui компонентов.

## ✨ Особенности

- ✅ **React компоненты** - все UI компоненты переписаны на React
- ✅ **Tailwind CSS** - современная утилитарная CSS-библиотека
- ✅ **shadcn/ui** - красивые, доступные компоненты
- ✅ **TypeScript** - полная типизация
- ✅ **Алиасы путей** - удобный импорт через `@/`
- ✅ **SEO-friendly** - канонические URL и OpenGraph метатеги
- ✅ **Sitemap** - автоматическая генерация карты сайта
- ✅ **Markdown & MDX** - поддержка контента в Markdown и MDX

## 🚀 Структура проекта

```text
├── public/
│   └── fonts/
├── src/
│   ├── components/
│   │   ├── ui/          # shadcn/ui компоненты
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── FormattedDate.tsx
│   ├── content/
│   │   └── blog/        # Markdown/MDX посты
│   ├── layouts/
│   │   └── BlogPost.astro
│   ├── lib/
│   │   └── utils.ts     # Утилиты (cn и др.)
│   ├── pages/
│   ├── styles/
│   │   └── global.css   # Tailwind стили
│   └── consts.ts
├── astro.config.mjs
├── tailwind.config.mjs
├── components.json       # shadcn/ui конфигурация
└── tsconfig.json
```

## 🧞 Команды

Все команды выполняются из корня проекта:

| Команда              | Действие                                          |
| :------------------- | :------------------------------------------------ |
| `pnpm install`       | Установка зависимостей                            |
| `pnpm dev`           | Запуск dev-сервера на `localhost:4321`            |
| `pnpm build`         | Сборка production версии в `./dist/`              |
| `pnpm preview`       | Предпросмотр собранного сайта                     |
| `pnpm astro ...`     | Запуск CLI команд Astro                           |

## 🎨 Настройка темы

Цвета темы настраиваются в `src/styles/global.css` через CSS переменные:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  /* ... */
}
```

## 📦 Добавление новых shadcn/ui компонентов

Компоненты shadcn/ui находятся в `src/components/ui/`. Вы можете добавлять новые компоненты вручную или использовать CLI:

```bash
npx shadcn@latest add [component-name]
```

## 🔧 Алиасы путей

Настроены следующие алиасы для удобного импорта:

- `@/*` → `./src/*`
- `@/components/*` → `./src/components/*`
- `@/lib/*` → `./src/lib/*`
- `@/styles/*` → `./src/styles/*`
- `@/layouts/*` → `./src/layouts/*`
- `@/pages/*` → `./src/pages/*`

Пример использования:

```tsx
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
```

## 📝 Создание нового поста

1. Создайте новый `.md` или `.mdx` файл в `src/content/blog/`
2. Добавьте frontmatter:

```md
---
title: 'Заголовок поста'
description: 'Описание поста'
pubDate: 'Jan 20 2026'
heroImage: '../../assets/image.jpg'
---

Содержимое поста...
```

## 🌐 Деплой

Проект можно задеплоить на любую платформу, поддерживающую статические сайты:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

## 📚 Полезные ссылки

- [Документация Astro](https://docs.astro.build)
- [Документация shadcn/ui](https://ui.shadcn.com)
- [Документация Tailwind CSS](https://tailwindcss.com)
- [Документация React](https://react.dev)
