const express = require('express');
const errorHandler = require('./modules/core/errorHandler');
const logger = require('./modules/core/logger');
const bodyParse = require('./modules/core/bodyParser');
const cors = require('./modules/core/cors');
const routes = require('./modules/core/routes');
const dbConnect = require('./modules/core/db');

const app = express();
const PORT = process.env.PORT || 5002;

dbConnect();
logger(app);
bodyParse(app);
cors(app);
routes(app);
errorHandler(app);

app.listen(PORT, (error) => {
  if (error) console.log('Error in server setup');
  console.log('Server listening on Port:', PORT);
});
