import { Container, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import MuiButton from '../../StyeldComponent/MuiButton/MuiButton';
import bg from '../../../images/appointment-bg.png';

const Contact = () => {
    const useStyle = makeStyles({
        root:{
            background: `url(${bg})`,
            backgroundColor: 'rgba(56, 64, 71, 0.9)',
            backgroundBlendMode: 'darken, luminosity',
            backgriundRepeat: 'no-repeat',
            textAlign: "center",
            padding: '30px'
        },
        textarea:{
            border: 0,
            outline:0,
            width: '100%',
            margin: '20px 0',
            borderRadius: '3px',
            fontFamily: 'inherit',

        }
    })
    const {root, textarea} = useStyle()
    return (
        <div className={root}>
            <div>
                <Container maxWidth="md">
                    <Typography variant='h6' color="#19D3AE">Contact Us</Typography>
                    <Typography variant='h4' color="#fff">Always Connect with us</Typography>
                    <TextField
                        fullWidth
                        placeholder='Email Address*'
                        margin='normal'
                        required
                        sx={{backgroundColor: "#fff", borderRadius: 1}}
                    />
                    <TextField
                        fullWidth
                        placeholder='Subjects*'
                        margin='normal'
                        required
                        sx={{backgroundColor: "#fff", borderRadius: 1}}
                    />
                    <textarea rows={10} className={textarea} placeholder='Your Massage'>

                    </textarea>
                    <MuiButton sx={{width: 150}}>SUBMIT</MuiButton>
                </Container>
            </div>
        </div>
    );
};

export default Contact;