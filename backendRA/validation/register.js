//Required dependencies
const validator = require('validator');
const isEmpty = require('is-empty');

    module.exports = function validateRegisterInput(data) {
        let errors ={};
// Convert empty fields to empty string to use validator functions
    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    // data.username = !isEmpty(data.username) ? data.username : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';
//Name check
    if (validator.isEmpty(data.name)){
        errors.name = 'Full Name is required';
    }
//Email check
    if (validator.isEmpty(data.email)){
        errors.email = 'Email is required';
    }   else if (!validator.isEmail(data.email)){
        errors.email = 'Email is invalid';
    }
//Username check
    // if (validator.isEmpty(data.username)){
    //     errors.username = 'Username is required';
    // }
//Password check
    if (validator.isEmpty(data.password)){
        errors.password = 'Password is required';
    }
    if (validator.isEmpty(data.password2)){
        errors.password2 = 'Confirm password is required';
    }
    if (!validator.isLength(data.password, {min: 6, max: 30})){
        errors.password = 'Password must be at least 6 characters';
        }
if (!validator.equals(data.password, data.password2)){
    errors.password2 = 'Passwords must match';
        }
        return {
            errors,
            isValid: isEmpty(errors)
        };
    };