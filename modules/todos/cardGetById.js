const Card = require('./Model');
module.exports = function cardGetById(req, res) {
  const cardId = req.params.cardId;
  Card.findById(cardId)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('card get by id error');
    });
};
