import React, { useState } from 'react';

import InputField from './InputField'

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Checkbox from '@material-ui/core/Checkbox';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function SignUp() {
  const classes = useStyles();
  // Create the amount of references, inside the useRef as we have InputFields.
  const inputRefs = React.useRef([
    React.createRef(), React.createRef(), React.createRef()
  ]);
  const [data, setData ] = React.useState({});

  const handleChange = (name, value) => {
    setData(prev => ({...prev, [name]: value }))
  }

  const submitForm = (e) => {
    //prevents page from reloading
    e.preventDefault();

    let isValid = true;
    // looping through the input fields from inputRefs
    for(let i = 0; i< inputRefs.current.length;i++){
      // Apply the validate function on each input field
      const valid = inputRefs.current[i].current.validate()
      // set isValid to false if it doesn't meet the requirements
      if(!valid) isValid = false;
    }
    // carry on if it's valid
    if(!isValid) return;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
        <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
            Pal.im Register form
        </Typography>
      <form onSubmit={submitForm} className={classes.form} noValidate>
      <Grid container spacing={2}>
            <Grid item xs={12}>
        <InputField
          ref={inputRefs.current[0]}
          name='firstName'
          label='Username*:'
          variant='outlined'
          onChange={handleChange}
          validation={"required|min:3|max:16"}
        />
        </Grid>
          <Grid item xs={12}>
        <InputField
          ref={inputRefs.current[1]}
          name='password'
          label='Password*:'
          type='password'
          autoComplete="current-password"
          onChange={handleChange}
          validation={"required|min:6"}
        />
       </Grid>
            <Grid item xs={12}>
        <InputField
          ref={inputRefs.current[2]}
          type='password'
          name='confirmPassword'
          label='Confirm password*:'
          onChange={handleChange}
          validation={"equal"}
        />
         </Grid>
          </Grid>
        <Button
        type='submit'
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        >Register
        </Button>
      <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
    </div>
     <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default SignUp;
