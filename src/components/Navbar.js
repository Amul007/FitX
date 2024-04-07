import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Typography } from '@mui/material';
import { Home, FitnessCenter } from '@mui/icons-material';

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    px="20px"
    py="10px"
    background="transparent"
    boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)"
  >
    <Link to="/" style={{ textDecoration: 'none' }}>
      <Typography variant="h2" sx={{ fontFamily: 'Arial, sans-serif', fontWeight: 'bold', letterSpacing: '2px', color: '#FFA500' }}>
        FitX
      </Typography>
    </Link>
    <Stack direction="row" gap="40px" alignItems="center">
      <Link to="/" style={{ textDecoration: 'none', color: '#FFA500' }}>
        <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center' }}>
          <Home sx={{ mr: 1 }} />
          Home
        </Typography>
      </Link>
      <Link to="/exercises" style={{ textDecoration: 'none', color: '#FFA500' }}>
        <Typography variant="h5" sx={{ display: 'flex', alignItems: '#FFA500' }}>
          <FitnessCenter sx={{ mr: 1 }} />
          Exercises
        </Typography>
      </Link>
    </Stack>
  </Stack>
);

export default Navbar;
