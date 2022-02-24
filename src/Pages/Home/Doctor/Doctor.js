import React from 'react';
import { Box, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Doctor = (props) => {
    const {name, phone, img, Icon} = props.doctor;
    return (
        <Grid item xs={4} sm={4} md={4}>
              <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
                <CardMedia
                    component="img"
                    style={{}}
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography sx={{fontWeight: 600,textAlign: 'center'}} variant='h5' component='div'>
                      {name}
                    </Typography>
                    <Box variant='outlined' sx={{display: 'flex', mt: 2, justifyContent: 'center'}}>
                    <Icon style={{ fontSize: '20px', color: '#19D3AE', me: 2 }}/>
                    <Typography sx={{textAlign: 'center'}} variant="body2" color= 'text.secondary'>
                    {phone}
                    </Typography>
                    </Box>
                </CardContent>
               </Card>     
        </Grid>
    );
};

export default Doctor;