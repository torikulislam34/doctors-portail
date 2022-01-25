import React from 'react';

import Grid from '@mui/material/Grid';

import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png'
import { Button, Typography, Container } from '@mui/material';
import  {Box}  from '@mui/system';

const bannerbg = {
    background: `url(${bg})`,
    
}

const varticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}

const Banner = () => {
    return (
        <Container style={bannerbg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item style={{ ...varticalCenter,textAlign: 'left'}} xs={12} md={6}>
            <Box>
            <Typography variant='h3'>
                Your New Smail <br/>
                Starts Here
            </Typography>
            <Typography variant='h6' sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'gray'}}>
            Components may have multiple widths defined, causing the layout to change at the defined breakpoint. Width values given to large.
            </Typography>
            <Button variant='contained' style={{backgroundColor: '#5CE7ED'}}>Get Appoinment</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} style={varticalCenter}>
          <img
            style={{width: '400px'}}
             src={chair} alt=""/>
          </Grid>
          
        </Grid>
      </Container>
    );
};

export default Banner;