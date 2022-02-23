import React from 'react';

import Grid from '@mui/material/Grid';

import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png'
import { Typography, Container } from '@mui/material';
import  {Box}  from '@mui/system';
import MuiButton from '../../StyeldComponent/MuiButton/MuiButton';

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
        <Container style={bannerbg} sx={{ flexGrow: 1, my: 5}}>
        <Grid container spacing={2}>
          <Grid item style={{ ...varticalCenter,textAlign: 'left'}} xs={12} md={6}>
            <Box>
            <Typography variant='h4' sx={{fontWeight: 600}}>
                Your New Smail <br/>
                Starts Here
            </Typography>
            <Typography variant='h6' sx={{ my: 3, fontSize: 13, fontWeight: 300, color: 'gray'}}>
            Components may have multiple widths defined, causing the layout to change at the defined breakpoint. Width values given to large.
            </Typography>
            <MuiButton sx={{width: 150}}>GET APOINMENT</MuiButton>
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