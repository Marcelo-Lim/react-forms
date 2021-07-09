import React, { useState } from 'react';

import { Container, Paper, Grid,TextField, Button, Typography, FormControl, FormHelperText, Avatar} from '@material-ui/core';
import FingerprintSharpIcon from '@material-ui/icons/FingerprintSharp';

import useForm from './useForm.components';
//import validateInfo from './info-validation.components';

import useStyles  from '../../Styles';

export default function RegForm() {
const classes = useStyles();

const avatarStyle = { backgroundColor:'#46b4f0' }

const {handleChange, values} = useForm();

    return (
      <div className={classes.root}>
        <Paper className={classes.paper} elevation="20">
        <Container maxWidth="md">
            <form>
                <Grid container direction="column" alignItems="center" justify="center"> 
                  <Avatar style={avatarStyle}>
                    <FingerprintSharpIcon style={{ fontSize: 30 }} />
                  </Avatar>
                  <h5>Register now!</h5>
                  <Typography variant="caption" fullWidth style= {{ marginBottom: "1%"}}>Create an account</Typography>
                  <TextField  name="username" label="Username" placeholder='Enter your username'  value={values.username} required onChange={handleChange} fullWidth style= {{ marginBottom: "6%"}} variant="outlined"/>
                  <TextField  name="email" label="Email" type="email" placeholder='Enter your email' value={values.email} required onChange={handleChange} fullWidth style= {{ marginBottom: "6%"}} variant="outlined"/>
                  <TextField  name="contactNum" label="Contact no." placeholder='Enter your contact no.' type="number" size="20" minlength="11" maxWidth="12" value={values.contactNum} required onChange={handleChange} fullWidth style= {{ marginBottom: "7%"}} variant="outlined"/>
                  <TextField  name="password" label="Password" type="password" placeholder='Enter your password'
                    value={values.password} required onChange={handleChange} 
                    fullWidth style= {{ marginBottom: "6%"}} variant="outlined"/>
                  <TextField  name="confirmPass" label="Confirm Password" type="password" placeholder='Confirm your password'  
                  value={values.confirmPass} required onChange={handleChange} 
                  fullWidth style= {{ marginBottom: "6%"}} variant="outlined"/>
                </Grid>
                <Button type="submit" variant='contained' className={classes.button} style= {{ marginTop: "2%"}}>Submit</Button>
            </form>
        </Container>
        </Paper>
      </div>
    );
}
