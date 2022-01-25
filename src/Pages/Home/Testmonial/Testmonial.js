import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import testmonial from '../../../images/testmonial.png'

const Testmonial = () => {
    return (
        <Box sx={{ flexGrow: 1 , mt: 8}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} 
        >
          <Box>
            <Typography variant='h6' style={{color: '#5CE7ED'}}>
                TESTMONIAL
            </Typography>
            <Typography variant='h4'>
                What's Our Patients <br/>
                Says
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={testmonial} alt='/'></img>
        </Grid>
        
      </Grid>
    </Box>
    );
};

export default Testmonial;