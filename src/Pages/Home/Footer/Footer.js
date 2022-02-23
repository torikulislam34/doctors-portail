import { Container, Grid, IconButton, List, ListItemText, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react';
import MuiButton from '../../StyeldComponent/MuiButton/MuiButton';

const useStyle = makeStyles({
    socalIcon: {
        color: "#19D3AE !important",
        border: '1px solid #19D3AE !important',
        margin: '20px 10px 30px 0 !important',
        '&:hover':{
            background: '#19D3AE !important',
            color: '#fff !important'
        }
    }
})
const Footer = () => {
    const {socalIcon} = useStyle()
    return (
        <footer>
            <Container sx={{my: 5}}>
                <Grid container spacing={3} sx={{my: 3}}>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List sx={{mt: 4}}>
                            <ListItemText>Emergency Dental Care</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                            <ListItemText>Treatment of Personal Diseases</ListItemText>
                            <ListItemText>Tooth Extraction</ListItemText>
                            <ListItemText>Cheak Up</ListItemText>
                        </List>     
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List sx={{mt: 4}}>
                            <ListItemText sx={{color: '#19D3AE', mb: 1}}>Services</ListItemText>
                            <ListItemText>Emergency Dental Care</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                            <ListItemText>Treatment of Personal Diseases</ListItemText>
                            <ListItemText>Tooth Extraction</ListItemText>
                            <ListItemText>Cheak Up</ListItemText>
                            <ListItemText>Cheak Up</ListItemText>
                            <ListItemText>Cheak Up</ListItemText>
                        </List>       
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List sx={{mt: 4}}>
                            <ListItemText sx={{color: '#19D3AE', mb: 1}}>Oral Health</ListItemText>
                            <ListItemText>Emergency Dental Care</ListItemText>
                            <ListItemText>Check Up</ListItemText>
                            <ListItemText>Treatment of Personal Diseases</ListItemText>
                            <ListItemText>Tooth Extraction</ListItemText>
                            <ListItemText>Cheak Up</ListItemText>
                            <ListItemText>Cheak Up</ListItemText>
                            <ListItemText>Cheak Up</ListItemText>
                        </List>       
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List sx={{mt: 4}}>
                            <ListItemText sx={{color: '#19D3AE', mb: 1}}>Our Address</ListItemText>
                            <ListItemText>New Yourk - 101010 Hudson</ListItemText>
                            <ListItemText>Yards</ListItemText>                          
                        </List>
                        <IconButton className={socalIcon}>
                            <GoogleIcon></GoogleIcon>
                        </IconButton>       
                        <IconButton className={socalIcon}>
                            <TwitterIcon></TwitterIcon>
                        </IconButton>       
                        <IconButton className={socalIcon}>
                            <InstagramIcon></InstagramIcon>
                        </IconButton>
                        <Typography>Call Now</Typography> 
                        <MuiButton variant='contaiend'>+0866337766</MuiButton>    
                    </Grid>                   
                </Grid>
                <Typography sx={{textAlign: 'center',pt: 4, mt: 3, mb: 5}} variant="subtitle2">Copyrigt &copy; {new Date().getFullYear()} All Rights Reserved 2022</Typography>
            </Container>
        </footer>
    );
};

export default Footer;