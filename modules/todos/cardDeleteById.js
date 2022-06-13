const Card = require('./Model');
module.exports = function cardDeleteById(req, res) {
  const cardId = req.params.cardId;

  Card.deleteOne({ _id: cardId })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('card delete by id error');
    });
};
