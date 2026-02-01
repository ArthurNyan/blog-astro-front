import { defineConfig } from '@hey-api/openapi-ts'

export default defineConfig({
    base: 'http://localhost:1337',  // ваш Strapi URL
    input: 'http://localhost:1337/api/documentation/1.0.0/full_documentation',  // путь к OpenAPI
    output: {
        path: 'src/shared/api/generated',  // папка для генерации
        lint: 'eslint',
        format: 'prettier'
    },
    services: { asClass: true },
    plugins: ['@hey-api/client-axios'], 
})
