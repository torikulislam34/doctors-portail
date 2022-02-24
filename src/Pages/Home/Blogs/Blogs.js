import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import doctor1 from '../../../images/people-2.png';
import doctor2 from '../../../images/people-1.png'
import Blog from '../Blog/Blog';


const blogs = [
    {
        name: 'Dr. Rashedul Islam',
        date: '24 Feb 2022',
        title: 'Check at least in a doctor year for your teeth ',
    },
    {
        name: 'Dr. Maliha Kabir',
        date: '26 Feb 2022',
        img: doctor1,
        title: 'To times of brush in a day can keep you healty ',
        dis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae eaque in quas commodi at optio dignissimos laborum inventore voluptate nesciunt.'
    },
    {
        name: 'Dr. Imtiaz Johan',
        date: '27 Feb 2022',
        img: doctor2,
        title: 'The tooth cancer is taking a bigest challenge ',
        dis: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae eaque in quas commodi at optio dignissimos laborum inventore voluptate nesciunt.'
    }
    
]

const Blogs = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1, mb: 20}}>
            <Container>
                <Typography  sx={{ fontWeight: 500, mt: 5, mb: 2, color: '#19D3AE', textAlign: 'center'}} variant='h6' component='div'>
                        OUR BLOGS
                </Typography>
                <Typography  sx={{mb: 10,  textAlign: 'center' }} variant='h4' component='div'>
                         From Our Blogs News
                </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    blogs.map(blog => <Blog
                       key={blog.name}
                       blog={blog}
                    ></Blog>)
                }
            </Grid>
            </Container>
            </Box>
        </div>
    );
};

export default Blogs;