import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Revew = (props) => {
    const {name, discription, img, personality} = props.service;
    return (
        <Grid item xs={4} sm={4} md={4}>
              <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <Typography sx={{textAlign: 'center', m:1}} variant="body2" color= 'text.secondary'>
                    {discription}
                </Typography>
                
                <CardContent sx={{display: 'flex'}}>
                    <CardMedia
                    component="img"
                    style={{width: "auto",}}
                    image={img}
                    alt="green iguana"
                    />
                    <div style={{margin: 15}}>
                    <Typography variant='h5' component='div' style={{color: '#5CE7ED'}}>
                      {name}
                    </Typography>                   
                    <Typography variant='body1' component='div' color= 'text.secondary'>
                      {personality}
                    </Typography> 
                    </div>                  
                </CardContent>
               </Card>     
        </Grid>
    );
};

export default Revew;