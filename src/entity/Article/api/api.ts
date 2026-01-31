import { ArticleService } from '@/shared/api/client';

// Используем сгенерированный сервис с типами
export const getArticles = (options?: Parameters<typeof ArticleService.getArticles>[0]) => 
    ArticleService.getArticles(options);

export const getArticleById = (id: string) => 
    ArticleService.getArticleById(id);

export const createArticle = (data: Parameters<typeof ArticleService.createArticle>[0]) => 
    ArticleService.createArticle(data);

export const updateArticle = (id: number, data: Parameters<typeof ArticleService.updateArticle>[1]) => 
    ArticleService.updateArticle(id, data);

export const deleteArticle = (id: number) => 
    ArticleService.deleteArticle(id);
