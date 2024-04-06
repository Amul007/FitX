import React from 'react';
import { Box, Typography } from '@mui/material';
import Logo from '../assets/icons/fit.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#222" py="50px" textAlign="center">
    <img src={Logo} alt="logo" style={{ width: '50px', height: 'auto' }} />
    <Typography variant="h6" sx={{ color: 'white', mt: 2 }}>Made by AmulGairola</Typography>
    <Typography variant="body2" sx={{ color: 'white', mt: 1 }}>© 2024 AmulGairola. All rights reserved.</Typography>
  </Box>
);

export default Footer;
