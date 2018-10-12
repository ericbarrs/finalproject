const express = require('express');
const router = express.Router();
const passport = require('passport')

const {list, create} = require('../../controllers/profileController')
//Load User profile model


//Load User profile

//Routes private
router.get('/profile',passport.authenticate('jwt', {session: false}), list)

//Routes post
router.post('/profile', passport.authenticate('jwt', {session: false}), create)

module.exports = router