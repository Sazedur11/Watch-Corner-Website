import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Products from '../../../Pages/Home/Products/Products';
import './About.css';

const About = () => {
    return (
        <Box id="about" sx={{ flexGrow: 1, mt: 8 }}>
            <Grid container spacing={1}>
                <Grid item sm={4} >
                    <h2>About Watch Corner</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                </Grid>
                <Grid item sm={8}>
                    <Products></Products>
                </Grid>
            </Grid>
        </Box>
    );
};

export default About;