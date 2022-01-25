import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';;

const apoinmentbg = {
  background: `url(${bg})`,
  backgroundColor: 'rgba(56, 64, 71, 0.9)',
  backgroundBlendMode: 'darken, luminosity',
  marginTop: '100px',
  height: '300px'
}

const ApoinmentBanner = () => {
    return (
        <Box style={apoinmentbg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <img
             style={{width: '400px',marginTop: '-115px'}}
             src={Doctor} alt=""/>
          </Grid>
          <Grid item xs={12} md={6} sx= {{
            display: 'flex',
            justifyContent: 'flex-start',
            textAlign: 'left',
            alignItems: 'center'
            }}>
           <Box sx={{mx: 2}}>
              <Typography variant='h6' sx={{mb: 5}} style={{color: '#5CE7ED'}}>
                  Apoinment
              </Typography>
              
              <Typography variant='h4' style={{color: 'white'}}>
                  Make an Apoinment Today
              </Typography>

              <Typography variant='h6' sx={{my: 5}} style={{color: 'white', fontSize: '14px', fontWeight: '300'}}>
              flat design colors, Google's Material design scheme and the classic web safe color palette, all with Hex color codes.
              </Typography>
              <Button variant='contained' style={{backgroundColor: '#5CE7ED', marginBottom: '10px'}}>Learn More</Button>
           </Box>
           </Grid>
        </Grid>
      </Box>
    );
};

export default ApoinmentBanner;