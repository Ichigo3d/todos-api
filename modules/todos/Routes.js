const Router = require('express');
const cardCreate = require('./cardCreate');
const cardGetAll = require('./cardGetAll');
const cardGetById = require('./cardGetById');
const cardUpdateById = require('./cardUpdateById');
const cardDeleteById = require('./cardDeleteById');
const cardDeleteAll = require('./cardDeleteAll');
const router = Router();

router.post('/', cardCreate);
router.get('/', cardGetAll);
router.get('/:cardId', cardGetById);
router.patch('/:cardId', cardUpdateById);
router.delete('/:cardId', cardDeleteById);
router.delete('/', cardDeleteAll);

module.exports = router;
