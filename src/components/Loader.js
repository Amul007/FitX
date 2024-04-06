import React from 'react';
import { CircularProgress, Stack } from '@mui/material';

const Loader = () => (
  <Stack direction="row" justifyContent="center" alignItems="center" width="100%" height="100vh">
    <CircularProgress size={80} thickness={4} sx={{ color: '#4CAF50' }} />
  </Stack>
);

export default Loader;
