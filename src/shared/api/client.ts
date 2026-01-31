// Конфигурация API клиента
export { apiInstance } from './instance';

// Экспорт типов из OpenAPI
export type * from './generated/types';

// Экспорт сервисов
export { 
  ArticleService, 
  ProjectService, 
  AuthorService, 
  GlobalService, 
  HomePageService,
  api 
} from './generated/services';

// Экспорт кастомных типов
export type * from './types';
