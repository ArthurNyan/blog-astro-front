import { ArticleService } from '@/shared/api/client';

// Используем сгенерированный сервис с типами
export const getArticles = (options?: Parameters<typeof ArticleService.getArticles>[0]) => 
    ArticleService.getArticles(options || {});

export const getArticleById = (id: number) => 
    ArticleService.getArticlesId({ id });

export const createArticle = (data: Parameters<typeof ArticleService.postArticles>[0]['requestBody']) => 
    ArticleService.postArticles({ requestBody: data });

export const updateArticle = (id: number, data: Parameters<typeof ArticleService.putArticlesId>[0]['requestBody']) => 
    ArticleService.putArticlesId({ id, requestBody: data });

export const deleteArticle = (id: number) => 
    ArticleService.deleteArticlesId({ id });
