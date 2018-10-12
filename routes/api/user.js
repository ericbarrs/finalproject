const express = require('express');
const router = express.Router();
const passport = require('passport')

const { list , create, logon , current} = require('../../controllers/userController')
//public
router.get('/login', list)
//public
router.post('/register', create)
//public
router.post('/login', logon)
//private
router.get('/current', passport.authenticate('jwt', {session: false}), current)

module.exports = router;