import React, { useState } from 'react';
import RegForm from '../form/forms.components';
import SuccessForm from '../success/done.components';

const MainForm = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    function submitForm() {
      setIsSubmitted(true);
    }
    return (
        <div>
          {!isSubmitted ? (
          <RegForm submitForm={submitForm} />
        ) : (
          <SuccessForm />
        )}
        </div>
    );
  };
  
  export default MainForm;