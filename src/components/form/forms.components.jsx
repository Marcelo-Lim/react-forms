import React from 'react';

import { Container, Paper, Grid,TextField, Button, Typography, Avatar} from '@material-ui/core';
import FingerprintSharpIcon from '@material-ui/icons/FingerprintSharp';

import useForm from './useForm.components';
import validate from './info-validation.components';

import './forms.style.css';
import useStyles  from './forms-materialUI.styles';

export default function RegForm({ submitForm }) {
const classes = useStyles();

const {handleChange, values, handleSubmit, errors} = useForm(submitForm, validate);

    return (
      <div className={classes.root1}>
        <Paper className={classes.paper1} elevation="20">
        <Container maxWidth="md">
            <form className="form-input" onSubmit={handleSubmit}>
                <Grid container direction="column" alignItems="center" justify="center"> 
                  <Avatar className={classes.avatar}>
                    <FingerprintSharpIcon style={{ fontSize: 30 }} />
                  </Avatar>
                  <h5>Register now!</h5>
                  <Typography variant="caption" fullWidth style= {{ marginBottom: "1%"}}>Create an account</Typography>
                  <TextField  name="username" label="Username" placeholder='Enter your username'  value={values.username} onChange={handleChange} fullWidth style= {{ marginBottom: "6%"}} variant="outlined" error={Boolean(errors.username)} helperText={errors.username}/>
                  <TextField  name="email" label="Email" type="email" placeholder='Enter your email' value={values.email} onChange={handleChange} fullWidth style= {{ marginBottom: "6%"}} variant="outlined" error={Boolean(errors.email)} helperText={errors.email}/>
                  <TextField  name="contactNum" label="Contact no." placeholder='Enter your contact no.' type="text" value={values.contactNum} onChange={handleChange} fullWidth style= {{ marginBottom: "7%"}} variant="outlined" error={Boolean(errors.contactNum)} helperText={errors.contactNum}/>
                  <TextField  name="password" label="Password" type="password" placeholder='Enter your password'
                    value={values.password} onChange={handleChange} 
                    fullWidth style= {{ marginBottom: "6%"}} variant="outlined"  error={Boolean(errors.password)} helperText={errors.password}/>
                  <TextField name="confirmPass" label="Confirm Password" type="password" placeholder='Confirm your password'  
                  value={values.confirmPass} onChange={handleChange}
                  fullWidth style= {{ marginBottom: "5%"}} variant="outlined" error={Boolean(errors.confirmPass)} helperText={errors.confirmPass}/>
                </Grid>
                <Button type="submit" variant='contained' className={classes.button} style= {{ marginBottom: "1%"}}>Submit</Button>
            </form>
            <span className="form-login">
                Already have an account? Login <a href='#'>here</a>
            </span>
        </Container>
        </Paper>
      </div>
    );
}
