// Расширенные типы для Article и Project
// Эти типы дополняют сгенерированные типы недостающими полями

import type { Article as GeneratedArticle, Project as GeneratedProject } from './generated';

// Тип для автора
export interface Author {
  id?: string | number;
  documentId?: string;
  name?: string;
  bio?: string;
  avatar?: {
    url?: string;
    alternativeText?: string;
  };
}

// Расширенный тип Article с дополнительными полями
export interface Article extends Omit<GeneratedArticle, 'authors'> {
  title?: string;
  content?: string;
  cover?: {
    id?: string | number;
    name?: string;
    url?: string;
    alternativeText?: string;
    formats?: any;
  };
  authors?: Author[];
}

// Расширенный тип Project с дополнительными полями
export interface Project extends GeneratedProject {
  title?: string;
  content?: string;
  cover?: {
    id?: string | number;
    name?: string;
    url?: string;
    alternativeText?: string;
    formats?: any;
  };
  technologies?: string[];
  github_url?: string;
  live_url?: string;
}

// Типы для ответов API
export interface ArticleListResponse {
  data?: Article[];
  meta?: {
    pagination?: {
      page?: number;
      pageSize?: number;
      pageCount?: number;
      total?: number;
    };
  };
}

export interface ArticleResponse {
  data?: Article;
  meta?: Record<string, any>;
}

export interface ProjectListResponse {
  data?: Project[];
  meta?: {
    pagination?: {
      page?: number;
      pageSize?: number;
      pageCount?: number;
      total?: number;
    };
  };
}

export interface ProjectResponse {
  data?: Project;
  meta?: Record<string, any>;
}
