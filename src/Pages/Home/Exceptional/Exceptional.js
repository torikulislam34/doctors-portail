import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Dental from '../../../images/treatment.png'
import { Button, Typography } from '@mui/material';

const Exceptional = () => {
    return (
        <Box sx={{ flexGrow: 1, mx:2,  my: 5}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
          <img
             style={{width: '400px'}}
             src={Dental} alt=""/>
          </Grid>
          <Grid item xs={12} md={6} sx= {{
            display: 'flex',
            justifyContent: 'flex-start',
            textAlign: 'left',
            alignItems: 'center'}}>
            <Box>
            <Typography variant='h4'>
                Exceptional Dental <br/>
                Care, on Your Terms 
            </Typography>
            <Typography variant='h6' sx={{ my: 5, fontSize: 13, fontWeight: 300, color: 'gray'}}>
            If you receive an error, check whether sonabondu<br/> you included the proper connection string in <br/>the application code, and loaded the sample dataset mone to mkane na <br/> in your Atlas cluster.After completing dilwe to buje nah<br/> this step, you should have a working application that uses the Node.<br/>js driver to connect to your MongoDB instance, sona bondur mukher hasi jeno <br/> run a query on the sample data,purnima sosi application that<br/>and prints out the result application that application that.
            </Typography>
            <Button variant="contained" style={{backgroundColor: '#5CE7ED'}}>Learn More</Button>
            </Box>
          </Grid>
          
        </Grid>
      </Box>
    );
};

export default Exceptional;