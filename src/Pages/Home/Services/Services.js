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
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eaque quos beatae explicabo corporis quasi similique totam, vitae a veritatis, nihil ratione. Quas impedit provident sapiente accusamus et est nostrum.',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eaque quos beatae explicabo corporis quasi similique totam, vitae a veritatis, nihil ratione. Quas impedit provident sapiente accusamus et est nostrum.',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eaque quos beatae explicabo corporis quasi similique totam, vitae a veritatis, nihil ratione. Quas impedit provident sapiente accusamus et est nostrum.',
        img: whitening
    }
]

const Services = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography  sx={{ fontWeight: 500, m: 2, color: 'success.main'}} variant='h6' component='div'>
                        OUR SERVICES
                </Typography>
                <Typography  sx={{ fontWeight: 600, m: 4 }} variant='h4' component='div'>
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