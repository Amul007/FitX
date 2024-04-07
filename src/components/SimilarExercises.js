import React from 'react';
import { Typography, Box, Stack, IconButton } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
      Same <span style={{ color: 'grey', textTransform: 'capitalize', fontSize: '52px' }}>Muscle</span> exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {targetMuscleExercises.length !== 0 ? (
        <HorizontalScrollbar data={targetMuscleExercises}>
          <IconButton sx={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '10px', backgroundColor: '#FFF' }}>
            <ArrowForward />
          </IconButton>
        </HorizontalScrollbar>
      ) : (
        <Loader />
      )}
    </Stack>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: 'grey', textTransform: 'capitalize', fontSize: '52px' }}>type</span> exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {equipmentExercises.length !== 0 ? (
        <HorizontalScrollbar data={equipmentExercises}>
          <IconButton sx={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', right: '10px', backgroundColor: '#FFF' }}>
            <ArrowForward />
          </IconButton>
        </HorizontalScrollbar>
      ) : (
        <Loader />
      )}
    </Stack>
  </Box>
);

export default SimilarExercises;
