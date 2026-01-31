// Расширенные типы для Article и Project
// Эти типы дополняют сгенерированные типы недостающими полями

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

// Базовый тип Article из API
export interface Article {
  id?: string | number;
  documentId?: string;
  name?: string;
  title?: string;
  description?: string;
  content?: string;
  date?: string;
  slug?: string;
  cover?: {
    id?: string | number;
    name?: string;
    url?: string;
    alternativeText?: string;
    formats?: any;
  };
  authors?: Author[];
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
}

// Базовый тип Project из API
export interface Project {
  id?: string | number;
  documentId?: string;
  name?: string;
  title?: string;
  description?: string;
  content?: string;
  slug?: string;
  cover?: {
    id?: string | number;
    name?: string;
    url?: string;
    alternativeText?: string;
    formats?: any;
  };
  logo?: {
    id?: string | number;
    name?: string;
    url?: string;
    alternativeText?: string;
  };
  technologies?: string[];
  github_url?: string;
  live_url?: string;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
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
