import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Blog = (props) => {
    const {name,title,date,img,dis,} = props.blog;
    return (
        <Grid item xs={4} sm={4} md={4}>
              <Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
              <CardContent sx={{display: 'flex'}}>
                    <CardMedia
                    component="img"
                    style={{width: "auto", height: "50px",}}
                    image={img}
                    alt="green iguana"
                    />
                    <div style={{marginLeft: 15}}>
                    <Typography sx={{fontWeight: 500}} component='div'>
                      {name}
                    </Typography>                   
                    <Typography variant='body1' component='div' color= 'text.secondary'>
                      {date}
                    </Typography> 
                    </div>                  
                </CardContent>
                <Typography sx={{ m:1}} variant="h6">
                    {title}
                </Typography>
                <Typography sx={{ m:1}} variant="body2" color= 'text.secondary'>
                    {dis}
                </Typography>
               </Card>     
        </Grid>
    );
};

export default Blog;