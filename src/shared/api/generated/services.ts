// Типизированный API клиент на основе OpenAPI типов
import type { paths } from './types';
import { apiInstance } from '../instance';

// Вспомогательные типы для извлечения параметров и ответов
type GetParams<T> = T extends { parameters: { query?: infer Q } } ? Q : never;
type GetResponse<T> = T extends { responses: { 200: { content: { 'application/json': infer R } } } } ? R : never;
type PostBody<T> = T extends { requestBody: { content: { 'application/json': infer B } } } ? B : never;

// Сервис для работы с Article
export const ArticleService = {
  getArticles: (params?: GetParams<paths['/articles']['get']>) => 
    apiInstance.get<GetResponse<paths['/articles']['get']>>('/articles', { params }),
  
  getArticleById: (id: number | string, params?: GetParams<paths['/articles/{id}']['get']>) => 
    apiInstance.get<GetResponse<paths['/articles/{id}']['get']>>(`/articles/${id}`, { params }),
  
  createArticle: (data: PostBody<paths['/articles']['post']>) => 
    apiInstance.post<GetResponse<paths['/articles']['post']>>('/articles', data),
  
  updateArticle: (id: number | string, data: PostBody<paths['/articles/{id}']['put']>) => 
    apiInstance.put<GetResponse<paths['/articles/{id}']['put']>>(`/articles/${id}`, data),
  
  deleteArticle: (id: number | string) => 
    apiInstance.delete<GetResponse<paths['/articles/{id}']['delete']>>(`/articles/${id}`),
};

// Сервис для работы с Project
export const ProjectService = {
  getProjects: (params?: GetParams<paths['/projects']['get']>) => 
    apiInstance.get<GetResponse<paths['/projects']['get']>>('/projects', { params }),
  
  getProjectById: (id: number | string, params?: GetParams<paths['/projects/{id}']['get']>) => 
    apiInstance.get<GetResponse<paths['/projects/{id}']['get']>>(`/projects/${id}`, { params }),
  
  createProject: (data: PostBody<paths['/projects']['post']>) => 
    apiInstance.post<GetResponse<paths['/projects']['post']>>('/projects', data),
  
  updateProject: (id: number | string, data: PostBody<paths['/projects/{id}']['put']>) => 
    apiInstance.put<GetResponse<paths['/projects/{id}']['put']>>(`/projects/${id}`, data),
  
  deleteProject: (id: number | string) => 
    apiInstance.delete<GetResponse<paths['/projects/{id}']['delete']>>(`/projects/${id}`),
};

// Сервис для работы с Author
export const AuthorService = {
  getAuthors: (params?: GetParams<paths['/authors']['get']>) => 
    apiInstance.get<GetResponse<paths['/authors']['get']>>('/authors', { params }),
  
  getAuthorById: (id: number | string, params?: GetParams<paths['/authors/{id}']['get']>) => 
    apiInstance.get<GetResponse<paths['/authors/{id}']['get']>>(`/authors/${id}`, { params }),
  
  createAuthor: (data: PostBody<paths['/authors']['post']>) => 
    apiInstance.post<GetResponse<paths['/authors']['post']>>('/authors', data),
  
  updateAuthor: (id: number | string, data: PostBody<paths['/authors/{id}']['put']>) => 
    apiInstance.put<GetResponse<paths['/authors/{id}']['put']>>(`/authors/${id}`, data),
  
  deleteAuthor: (id: number | string) => 
    apiInstance.delete<GetResponse<paths['/authors/{id}']['delete']>>(`/authors/${id}`),
};

// Сервис для работы с Global
export const GlobalService = {
  getGlobal: (params?: GetParams<paths['/global']['get']>) => 
    apiInstance.get<GetResponse<paths['/global']['get']>>('/global', { params }),
  
  updateGlobal: (data: PostBody<paths['/global']['put']>) => 
    apiInstance.put<GetResponse<paths['/global']['put']>>('/global', data),
  
  deleteGlobal: () => 
    apiInstance.delete<GetResponse<paths['/global']['delete']>>('/global'),
};

// Сервис для работы с HomePage
export const HomePageService = {
  getHomePage: (params?: GetParams<paths['/home-page']['get']>) => 
    apiInstance.get<GetResponse<paths['/home-page']['get']>>('/home-page', { params }),
  
  updateHomePage: (data: PostBody<paths['/home-page']['put']>) => 
    apiInstance.put<GetResponse<paths['/home-page']['put']>>('/home-page', data),
  
  deleteHomePage: () => 
    apiInstance.delete<GetResponse<paths['/home-page']['delete']>>('/home-page'),
};

// Экспорт всех сервисов
export const api = {
  articles: ArticleService,
  projects: ProjectService,
  authors: AuthorService,
  global: GlobalService,
  homePage: HomePageService,
};
