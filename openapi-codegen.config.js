module.exports = {
  input: 'http://localhost:1337/api/documentation/1.0.0/full_documentation',
  output: './src/shared/api/generated',
  httpClient: 'axios',
  useOptions: true,
  useUnionTypes: true,
  exportCore: true,
  exportServices: true,
  exportModels: true,
  exportSchemas: false,
};
