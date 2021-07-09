export default function validateInfo(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = 'Username required';
    }
    else if(!/^[A-Za-z][A-Za-z0-9]*(?:_+[A-Za-z0-9]+)*$/.test(values.username)){
      errors.username= 'Invalid username';
    }
  
    if (!values.email) {
      errors.email = 'Email required';
    } 
    else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      .test(values.email)) {
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

    if (!values.contactNum){
        errors.contactNum = 'Contact number is required'
    }
    else if (!/^[0-9]*$/.test(values.contactNum) && values.contactNum.length !== /((^(\+)(\d){12}$)|(^\d{11}$))/){
        errors.contactNum = 'Please enter a valid contact number'
    }

    return errors;
  }