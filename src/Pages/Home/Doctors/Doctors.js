import React from 'react';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import doctor from '../../../images/doctor-small.png';
import Doctor from '../Doctor/Doctor';


const doctors = [
    {
        name: 'Dr. Maliha',
        phone: '+09777223455',
        img: doctor,
        Icon: AddIcCallIcon
    },
    {
        name: 'Dr. Imtiaz',
        phone: '+09777223344',
        img: doctor,
        Icon: AddIcCallIcon
    },
    {
        name: 'Dr. Arham',
        phone: '+09777223388',
        img: doctor,
        Icon: AddIcCallIcon
    }
]

const Doctors = () => {
    
    return (
        <div>
            <Box sx={{ flexGrow: 1, mb: 20}}>
            <Container>
                <Typography  sx={{ fontWeight: 500, mt: 3, mb: 8, color: '#19D3AE', textAlign: 'center'}} variant='h6' component='div'>
                        OUR DOCTORS
                </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    doctors.map(doctor => <Doctor
                       key={doctor.name}
                       doctor={doctor}
                    ></Doctor>)
                }
            </Grid>
            </Container>
            </Box>
        </div>
    );
};

export default Doctors;