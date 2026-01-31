import { OpenAPI } from './generated';

// Конфигурация OpenAPI клиента
OpenAPI.BASE = 'http://localhost:1337/api';
OpenAPI.WITH_CREDENTIALS = false;

// TODO: Добавить обработку токенов при необходимости
// OpenAPI.TOKEN = () => localStorage.getItem('token') || '';

export { OpenAPI };

// Экспорт всех сервисов
export * from './generated';

// Экспорт расширенных типов
export * from './types';
