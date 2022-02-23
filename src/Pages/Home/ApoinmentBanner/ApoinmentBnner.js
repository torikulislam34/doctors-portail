import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Typography } from '@mui/material';
import MuiButton from '../../StyeldComponent/MuiButton/MuiButton';
;

const apoinmentbg = {
  background: `url(${bg})`,
  backgroundColor: 'rgba(56, 64, 71, 0.9)',
  backgroundBlendMode: 'darken, luminosity',
  marginTop: '100px',
  height: '300px'
}

const ApoinmentBanner = () => {
    return (
        <Box style={apoinmentbg} sx={{ flexGrow: 1, mb: 15}}>
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
              <Typography variant='h6' sx={{mb: 3}} style={{color: '#5CE7ED'}}>
                  Apoinment
              </Typography>
              
              <Typography variant='h4' style={{color: 'white'}}>
                  Make an Apoinment Today
              </Typography>

              <Typography variant='h6' sx={{my: 5}} style={{color: 'white', fontSize: '14px', fontWeight: '300'}}>
              flat design colors, Google's Material design scheme and the classic web safe color palette, all with Hex color codes.
              </Typography>
              <MuiButton>Learn More</MuiButton>
           </Box>
           </Grid>
        </Grid>
      </Box>
    );
};

export default ApoinmentBanner;