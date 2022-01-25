import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import  Button  from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AppoinmentModal = ({openBooking, handelBookingClose, booking, date}) => {
    const {name, time} = booking;

    const handelBookingSubmit = e => {
      alert('Submitting');

      // Collect Data
      // Send to the Server
    
      handelBookingClose();
      e.preventDefault();
    }
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBooking}
        onClose={handelBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBooking}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <form onSubmit={handelBookingSubmit}>
              <TextField
              disabled
                id="outlined-size-small"
                defaultValue={time}
                size="small"
              />
              <TextField
                id="outlined-size-small"
                defaultValue="Your Name"
                size="small"
              />
              <TextField
                id="outlined-size-small"
                defaultValue="Your Email"
                size="small"
              />
              <TextField
                id="outlined-size-small"
                defaultValue="Phone Number"
                size="small"
              />
              <TextField
              disabled
                id="outlined-size-small"
                defaultValue={date}
                size="small"
              />
              <br/>
              <Button type='submit' variant="contained">Submit</Button>
              </form>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    );
};

export default AppoinmentModal;