export default function validateInfo(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Username required';
    }
  
    if (!values.email) {
      errors.email = 'Email required';
    } 
    else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Invalid input';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    } 
    else if (values.password.length < 8) {
      errors.password = 'Password needs to be 8 characters or more';
    }
  
    if (!values.confirmPass) {
      errors.confirmPass = 'Password is required';
    } 
    else if (values.confirmPass !== values.password) {
      errors.confirmPass = 'Passwords do not match';
    }

    if (!value.contactNum){
        errors.contactNum = 'Contact number is required'
    }
    else if (!/^[0-9]*$/.test(values.contactNum) && values.contactNum.length != /((^(\+)(\d){12}$)|(^\d{11}$))/){
        errors.contactNum = 'Please enter a valid contact number'
    }

    return errors;
  }