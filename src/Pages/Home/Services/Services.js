import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [
    {
        name: 'Fluoride Treatment',
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eaque quos beatae explicabo corporis quasi similique totam.',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eaque quos beatae explicabo corporis quasi similique totam.',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eaque quos beatae explicabo corporis quasi similique totam.',
        img: whitening
    }
]

const Services = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1, mb: 20}}>
            <Container>
                <Typography  sx={{ fontWeight: 500, mt: 5, mb: 2, color: '#5CE7ED', textAlign: 'center'}} variant='h6' component='div'>
                        OUR SERVICES
                </Typography>
                <Typography  sx={{ fontWeight: 600, mb: 10,  textAlign: 'center' }} variant='h5' component='div'>
                         SERVICES WE PROVIDE
                </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    services.map(service => <Service
                       key={service.name}
                       service={service}
                    ></Service>)
                }
            </Grid>
            </Container>
            </Box>
        </div>
    );
};

export default Services;