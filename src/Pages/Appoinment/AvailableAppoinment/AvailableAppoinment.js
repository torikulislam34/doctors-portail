import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {id: 1,
     name: 'Cavity Protection',
     time: '02.00 PM - 03.00 PM',
     space: 10
    },
    {id: 2,
     name: 'Cosmatic Denistry',
     time: '11.00 AM - 12.00 PM',
     space: 10
    },
    {id: 3,
     name: 'Teeth Cleanning',
     time: '02.00 PM - 03.00 PM',
     space: 10
    },
    {id: 4,
     name: 'Teeth Orthodonics',
     time: '08.00 AM - 09.00 PM',
     space: 10
    },
    {id: 5,
     name: 'Cavity Protection',
     time: '09.00 AM - 10.00 PM',
     space: 10
    },
    {id: 6,
     name: 'Oral Surgery',
     time: '11.00 AM - 12.00 PM',
     space: 10
    }
]

const AvailableAppoinment = ({date}) => {
    return (
        <Container>
            <Typography variant='h5' sx={{ color: 'info.main', fontWeight: 600, my:2 }}>AvailableAppoinments on {date.toDateString()}</Typography>
            <Grid container spacing={2}>
            {
                bookings.map(booking => <Booking
                key= {bookings.id}
                booking = {booking}
                date = {date}
                ></Booking>)
            }
            
            </Grid>
        </Container>
    );
};

export default AvailableAppoinment;