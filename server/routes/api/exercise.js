const express = require('express');
const router = express.Router();

const {list, create, remove} = require('../../controllers/exerciseController')

//@route Get api/items
router.get('/exercise', list)

//@route Post api/item
router.post('/exercise', create)

//@route Delete
router.delete('/delete', remove)

module.exports = router;

