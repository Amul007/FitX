import React from 'react';
import { Typography, Stack, Button, CircularProgress } from '@mui/material';
import { keyframes } from '@emotion/react';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const Detail = ({ exerciseDetail, loading }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];

  return (
    <Stack gap="60px" sx={{ flexDirection: { lg: 'row' }, p: '20px', alignItems: 'center', background: 'linear-gradient(to bottom, #f0f0f0, #ffffff)' }}>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <img src={gifUrl} alt={name} loading="lazy" className="detail-image" style={{ animation: `${pulseAnimation} 1s infinite alternate` }} />
          <Stack sx={{ gap: { lg: '35px', xs: '20px' } }}>
            <Typography sx={{ fontSize: { lg: '64px', xs: '30px' } }} fontWeight={700} textTransform="capitalize">
              {name}
            </Typography>
            <Typography sx={{ fontSize: { lg: '24px', xs: '18px' } }} color="#4F4C4C">
              Do exercise Daily.{' '}
              <span style={{ textTransform: 'capitalize' }}>{name}</span> is one
              of the best <br /> {target}exercise. It will help you improve your{' '}
              <br /> mood and gain energy.
            </Typography>
            {extraDetail?.map((item, index) => (
              <Stack key={index} direction="row" gap="24px" alignItems="center">
                <Button sx={{ background: '#FFF2DB', borderRadius: '50%', width: '100px', height: '100px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', transition: 'box-shadow 0.3s ease-in-out', '&:hover': { boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)' } }}>
                  <img src={item.icon} alt={item.name} style={{ width: '50px', height: '50px', animation: `${pulseAnimation} 1s infinite alternate` }} />
                </Button>
                <Typography textTransform="capitalize" sx={{ fontSize: { lg: '30px', xs: '20px' } }}>
                  {item.name}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </>
      )}
    </Stack>
  );
};

export default Detail;
