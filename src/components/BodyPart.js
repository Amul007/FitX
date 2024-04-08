import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gymm.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{
      background: '#fff',
      borderRadius: '20px',
      width: '220px',
      height: '252px',
      cursor: 'pointer',
      boxShadow: bodyPart === item ? '0px 4px 10px rgba(0, 0, 0, 0.2)' : '0px 2px 5px rgba(0, 0, 0, 0.1)',
      transition: 'box-shadow 0.3s ease',
      '&:hover': {
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
      },
    }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '60px', height: '60px' }} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize" mt="20px">
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
