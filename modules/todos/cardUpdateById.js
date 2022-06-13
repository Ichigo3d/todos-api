const Card = require('./Model');
module.exports = function cardUpdateById(req, res) {
  const cardId = req.params.cardId;
  Card.findByIdAndUpdate(cardId, req.body)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('card update by id error');
    });
};
