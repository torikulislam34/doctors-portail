import { Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AppoinmentModal from '../AppoinmentModal/AppoinmentModal';


const Booking = ({booking, date}) => {
    const {name, space, time} = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleOpenBooking = () => setBookingOpen(true);
    const handelBookingClose = () => setBookingOpen(false);
    return (
        <>
        <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3} sx={{py: 5}}>
                <Typography sx={{ color: 'info.main', fontWeight: 500 }} variant="h5" gutterBottom component="div">
                  {name}
               </Typography>
                <Typography variant="h6" gutterBottom component="div">
                  {time}
               </Typography>
               <Typography variant="caption" display="block" gutterBottom>
                    {space} SPACES AVAILABLE
               </Typography>
               <Button onClick={handleOpenBooking} variant="contained">BOOK APPOINMENT</Button>
            </Paper>
        </Grid>
        <AppoinmentModal
          booking={booking}
          date={date}
          openBooking={openBooking}
          handelBookingClose={handelBookingClose}
        ></AppoinmentModal>
        </>
            
    );
};

export default Booking;