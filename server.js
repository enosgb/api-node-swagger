const app = require('./src/app.js');
const port = process.env.PORT || 3000;
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

app.use(
  '/doc',
  swaggerUi.serve,
  swaggerUi.setup(swaggerFile)
)

app.listen(port, () => {
  console.log(`api escutando em http://localhost:${port}`);
});
