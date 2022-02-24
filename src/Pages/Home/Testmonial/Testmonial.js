import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import { Container, Typography } from '@mui/material';
import testmonial from '../../../images/testmonial.png';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';
import Revew from './Revew';
// import { positions } from '@mui/system';

const reviews = [
  {
      name: 'Winson Heery',
      discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eaque quos beatae explicabo corporis quasi similique totam, vitae a veritatis, nihil ratione. Lorem ipsum dolor sit amet consectetur adipisicing.',
      img: people1,
      personality: 'Bangali'
  },
  {
      name: 'Mosh Hamdani',
      discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eaque quos beatae explicabo corporis quasi similique totam, vitae a veritatis, nihil ratione. Lorem ipsum dolor sit amet consectetur adipisicing.',
      img: people2,
      personality: 'Romanian'
  },
  {
      name: 'Jon Khilari',
      discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eaque quos beatae explicabo corporis quasi similique totam, vitae a veritatis, nihil ratione. Lorem ipsum dolor sit amet consectetur adipisicing.',
      img: people3,
      personality: 'Bangali'
  }
]
// const testmonialbg = {
//   background: `url(${testmonial})`,
//   backgroundRepait: 'noRepait',
//   backgroundColor: 'rgba(56, 64, 71, 0.9)',
//   backgroundBlendMode: 'darken, luminosity',
//   height: '300px'
// }

const Testmonial = () => {
  const useStyle = makeStyles({
    root:{
        background: `url(${testmonial})`,
        backgroundColor: 'rgba(10, 60, 80, 0.2)',
        backgroundBlendMode: 'darken, luminosity',
        backgroundRepeat: 'no-repeat',
        // textAlign: "center",
        position: 'right',
        padding: '30px'
    }
  })
  const {root} = useStyle()
    return (
      <div>
        <Box sx={{ flexGrow: 1, mb:15}}>
        <Container>
            <Typography variant='h6' style={{color: '#19D3AE'}}>
                TESTMONIAL
            </Typography>
            <Typography variant='h4' sx={{mb: 8}}>
                What's Our Patients <br/>
                Says
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    reviews.map(review => <Revew
                       key={review.name}
                       service={review}
                    ></Revew>)
                }
            </Grid>
          </Container>
        </Box>
      </div>
    );
};

export default Testmonial;