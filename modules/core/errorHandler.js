module.exports = function errorHandler(app) {
  app.use(pageNotFound);
};

function pageNotFound(req, res) {
  res.status(400).json('Page not found');
}
