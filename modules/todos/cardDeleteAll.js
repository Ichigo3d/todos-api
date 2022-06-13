const Card = require('./Model');
module.exports = function cardDeleteAll(req, res) {
  Card.deleteMany()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Card delete All error');
    });
};
