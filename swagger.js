const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./src/routes/produtoRoutes.js'];

swaggerAutogen(outputFile, endpointsFiles);
