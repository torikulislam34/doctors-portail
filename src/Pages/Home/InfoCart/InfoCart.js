import React from 'react';
import locationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
import { Container, Grid, Paper, Typography } from '@mui/material';

const InfoData = [
    {
        title: 'Opening Hours',
        Icon: AccessTimeIcon,
        discription: 'We are open 7 days',
        background: '#1CC7C1'
    },
    {
        title: 'Viisit Our Location',
        Icon: locationOnIcon,
        discription: 'Brooklyn, NY 10003 USA',
        background: '#3A4256'
    },
    {
        title: 'Call us now',
        Icon: WifiCalling3Icon,
        discription: '+16670823456',
        background: '#1CC7C1'
    },
]

const InfoCart = () => {
    return (
        <Container sx={{my: 5}}>
            <Grid container spacing={3}>
               {
                   InfoData.map(({Icon,title,discription,background}) => <Grid item xs={12} sm={12} md={4} lg={4}>
                       <Paper variant='outlined' sx={{display: 'flex', justifyContent: 'space-between', background: background, color: '#fff', p: 2}}>
                           <Icon style={{ fontSize: '60px' }}/>
                           <div>
                               <Typography variant='body1'>{title}</Typography>
                               <Typography variant='subtitle1'>{discription}</Typography>
                           </div>
                       </Paper>
                   </Grid>)
               }  
            </Grid>
        </Container>
    );
};

export default InfoCart;