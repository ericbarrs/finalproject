const User = require('../models/user')
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs') 
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')

//load input Vaildation 
const validateRegisterInput = require('../validation/register')
const validateLogonInput = require('../validation/login')

module.exports.list = function(req,res){
  User.find({}, (err,data)=>{
    if(err){console.log(err)}
    else{return data}
  })
  .sort({data: -1})
  .then(user => res.json(user))
}

module.exports.create = function(req,res){
  const { errors, isValid } = validateRegisterInput(req.body)
 
  //check Validation
  if(isValid){
    return res.status(400).json(errors)
  }

    User.findOne({ email: req.body.email})
    .then(user => {
      if(user){
        return res.status(400).json({email: "Email already exists"})
      }else{

        const avatar = gravatar.url(req.body.email, {
          s:'200', //Size
          rating: 'pg',  // Rating
          d: 'mm' //Default
        })
        const newUser = new User({
          email: req.body.email,
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          avatar,
          password: req.body.password
        })
        bcrypt.genSalt(10, (err,salt)=>{
          bcrypt.hash(newUser.password, salt, (err,hash)=>{
            if(err){throw err};
            newUser.password = hash;
            newUser.save()
            .then(login => res.json(login))
            .catch(err => console.log(err))
          })
        })
      }
    })
}

module.exports.logon = function(req,res){
  const { errors, isValid } = validateLogonInput(req.body)
  
  if(!isValid){
    return res.status(400).json(errors)
  }
  const email = req.body.email;
  const password = req.body.password
  User.findOne({email})
  .then(user =>{
    //check for user
    if(!user){
      return res.status(404).json({email: "user not found"})
    }
    //check password
    bcrypt.compare(password, user.password)
    .then(isMatch =>{
      if(isMatch){
        //User matched

        const payload ={id: user.id, name: user.firstname, avatar: user.avatar}

        //Sign token
        //expires in seconds 
        jwt.sign(payload, process.env.secretOrKey || keys.secretOrKey, {expiresIn: 3600 }, (err, token)=>{
          res.json({
          success:true,
          token: 'Bearer ' + token
          })
        })
      }else{
        return res.status(400).json({success:false, password: "password incorrect"})
      }
    })
  })
}

//route   Get /current
//desc    Return current user
//access  private
module.exports.current = function(req,res){
  res.json({
    id: req.user.id,
    firstname:req.user.firstname,
    lastname:req.user.lastname,
    avatar:req.user.avatar,
    email:req.user.email
  })
}