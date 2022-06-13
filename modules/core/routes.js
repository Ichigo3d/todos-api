const todoRouter = require('../todos/Routes');

module.exports = function routes(app) {
  app.use('/', todoRouter);
};
