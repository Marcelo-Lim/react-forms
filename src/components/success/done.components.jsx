import React from 'react';
import useStyles from '../form/forms-materialUI.styles';
import '../form/forms.style.css';

export default function SuccessForm() {
    const classes = useStyles();
    return(
    <div className={classes.root2}>
        <paper className={classes.paper2} elevation="20">
            <img
                alt='success'
                src={`https://robohash.org/$?set=set1&size=180x180`}
            /> 
            <h5>We have received your request!</h5>
        </paper>
    </div>
    );
}
    