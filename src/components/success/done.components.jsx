import React from 'react';
import useStyles from '../form/forms-materialUI.styles';
import '../form/forms.style.css';

export default function SuccessForm() {
    const classes = useStyles();
    return(
    <div className={classes.root2}>
        <paper className={classes.paper2} elevation="20"> 
            <h1 className='form-success'>We have received your request!</h1>
        </paper>
    </div>
    );
}
    