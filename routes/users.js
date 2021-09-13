const express = require('express');
const router = express.Router();
const { users } = require('../controllers');

router.post('/', users.add);
router.get('/:id', users.get);
router.put('/:id', users.update);
router.delete('/:id', users.del);

module.exports = router;
