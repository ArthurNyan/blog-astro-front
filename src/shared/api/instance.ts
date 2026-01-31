import axios from 'axios';
import { AXIOS_TIMEOUT } from './const';

export const apiInstance = axios.create({
    // TODO?: use env
    baseURL: 'http://localhost:1337/api',
    withCredentials: false,
    timeout: AXIOS_TIMEOUT,
});

// TODO?: apiInstance.use Обработка ошибок
