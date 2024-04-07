import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="600" fontSize="32px" mb="10px">FitX: The Fitness App</Typography>
    <Typography fontWeight={700} sx={{ fontSize: { lg: '48px', xs: '36px' }, color: '#333' }} mb="20px">
      Eat Healthy <br />
      Be Fit
    </Typography>
    <Typography fontSize="18px" fontFamily="Alegreya" lineHeight="1.5" color="#666" mb="30px">
      Discover the best exercises to reach your fitness goals.
    </Typography>
    <Button variant="contained" component="a" href="#exercises" color="primary" size="large" sx={{ textTransform: 'none', borderRadius: '50px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', background: '#FF2625', color: 'white', '&:hover': { background: '#FF5555' } }}>
      Check Out Exercises
    </Button>
  </Box>
);

export default HeroBanner;
