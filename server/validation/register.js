const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data){
  let errors = {}

  data.email = !isEmpty(data.email) ? data.email : '';
  data.firstname = !isEmpty(data.firstname) ? data.firstname : '';
  data.lastname = !isEmpty(data.lastname) ? data.lastname : '';
  data.password = !isEmpty(data.name) ? data.password : '';
  data.vpassword = !isEmpty(data.vpassword) ? data.vpassword : '';

  if(!Validator.isLength(data.firstname, {min: 2, max: 30})){
    errors.firstname = 'Name must be between 2 and 30 characters'
  }
  if(!Validator.isLength(data.lastname, {min: 2, max: 30})){
    errors.lastname = 'Name must be between 2 and 30 characters'
  }
  if(!Validator.isEmail(data.email)){
    errors.email = 'Email is invalid'
  }
  if(!Validator.isEmpty(data.firstname)){
    errors.firstname = 'First name Field is required'
  }
  if(!Validator.isEmpty(data.lastname)){
    errors.lastname = 'Last name Field is required'
  }
  if(!Validator.isEmpty(data.password)){
    errors.password = 'Password field is required'
  }
  if(!Validator.isLength(data.password,{min: 6, max: 30})){
    errors.password = 'Password must be at least 6 characters'
  }
  if(!Validator.isEmpty(data.vpassword)){
    errors.vpassword = 'Confirm Password field is required'
  }
  if(!Validator.equals(data.password, data.vpassword)){
    errors.vpassword = 'Passwords must match'
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
}