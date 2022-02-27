import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {user, loginUser, isLoding, authError} = useAuth();
    const handleOnChange = e => {
       const field = e.target.name;
       const value = e.target.value;
    //    console.log(field, value);
    const newLoginData = {...loginData}
    newLoginData[field] = value;
    setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password)
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
            <Grid item sx={{mt: 8}} xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              Login
            </Typography>
             <form onSubmit={handleLoginSubmit}>
                <TextField 
                sx={{width: "75%", mt: 1}}
                id="standard-basic" 
                label="Your Email"
                name="email" 
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
                <Button sx={{width: "75%", mt: 2}} type='submit' variant="contained">Login</Button>
                {isLoding && <CircularProgress />}
                {user?.email && <Alert severity="success">User created success fully!</Alert>}
                {authError && <Alert severity="error">{authError}</Alert>}
             </form>
             <NavLink
              style={{textDecoration: 'none'}} 
              to='/register'>
             <Button variant="text">New User? Please register</Button>
             </NavLink>
            </Grid>
            <Grid item xs={12} md={6}>
                <img style={{width: '100%'}} src={login} alt='/'></img>
            </Grid>
        </Grid>
        </Container>
    );
};

export default Login;
/*import React from 'react';

const Login = () => {
    return (
        <div>
            
        </div>
    );
};

export default Login;*/