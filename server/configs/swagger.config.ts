import { createSwaggerSpec } from 'next-swagger-doc';

export const getApiDocs = async () => {
  const spec: Record<string, any> = createSwaggerSpec({
    apiFolder: 'src/server/swaggerDefinition/',
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Next Gen Swagger API',
        version: '1.0',
      },
    },
  });

  return spec;
};

export default getApiDocs;
