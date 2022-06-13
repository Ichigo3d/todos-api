const Card = require('./Model');
module.exports = function cardCreate(req, res) {
  const newCard = new Card({
    title: req.body.title,
    status: req.body.status,
  });
  newCard
    .save()
    .then(() => {
      res.status(200).json('Card created');
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Card not created');
    })
    .finally(() => {
      console.log('END');
    });
};
