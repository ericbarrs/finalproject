const express = require('express');
const router = express.Router();
const passport = require('passport')

const {list, create, remove} = require('../../controllers/exerciseController')

//@route Get api/items
router.get('/exercise',passport.authenticate('jwt', {session:false}), list)

//@route Post api/item
router.post('/exercise',passport.authenticate('jwt', {session:false}), create)

//@route Delete
router.delete('/delete',passport.authenticate('jwt', {session:false}), remove)

module.exports = router;

