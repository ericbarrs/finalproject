const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data){
  let errors = {}

  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.name) ? data.password : '';


  if(!Validator.isLength(data.firstname, {min: 2, max: 30})){
    errors.firstname = 'Name must be between 2 and 30 characters'
  }

  if(!Validator.isEmail(data.email)){
    errors.email = 'Email is invalid'
  }

  if(Validator.isEmpty(data.password)){
    errors.password = 'Password field is required'
  }


  return {
    errors,
    isValid: isEmpty(errors)
  }
}