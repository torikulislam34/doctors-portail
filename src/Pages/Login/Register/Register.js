import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const {authError, user, registerUser, isLoding} = useAuth()
    const handleOnChange = e => {
       const field = e.target.name;
       const value = e.target.value;
    //    console.log(field, value);
    const newLoginData = {...loginData}
    newLoginData[field] = value;
    setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if(loginData.password !== loginData.password2){
            alert('Your Password didnot Match')
            return
        }
        registerUser (loginData.email, loginData.password)
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
            <Grid item sx={{mt: 15}} xs={12} md={6}>
            <Typography variant="body1" gutterBottom>
              Register
            </Typography>
             { !isLoding && <form onSubmit={handleLoginSubmit}>
                <TextField 
                sx={{width: "75%", mt: 1}}
                id="standard-basic" 
                label="Your Email"
                name="email" 
                type='email'
                onChange={handleOnChange}
                variant="standard" 
                />
                <TextField
                sx={{width: "75%", mt: 1}}
                id="standard-basic"
                label="Password"
                name="password"
                onChange={handleOnChange}
                type="password"
                variant="standard"
                />
                <TextField
                sx={{width: "75%", mt: 1}}
                id="standard-basic"
                label="Re Type Password"
                name="password2"
                onChange={handleOnChange}
                type="password"
                variant="standard"
                />
                <Button sx={{width: "75%", mt: 2}} type='submit' variant="contained">Register</Button>
             </form>}
             {isLoding && <CircularProgress />}
             {user?.email && <Alert severity="success">User created success fully!</Alert>}
             {authError && <Alert severity="error">{authError}</Alert>}
             <NavLink
              style={{textDecoration: 'none'}} 
              to='/login'>
             <Button variant="text">Already Register? Please Login</Button>
             </NavLink>
            </Grid>
            <Grid item xs={12} md={6}>
                <img style={{width: '100%'}} src={login} alt='/'></img>
            </Grid>
        </Grid>
        </Container>
    );
};

export default Register;