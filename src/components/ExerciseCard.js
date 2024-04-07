import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, CardMedia, Grow, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Grow in timeout={500}> {/* Remove unnecessary value assignment for the 'in' prop */}
    <Link to={`/exercise/${exercise.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card sx={{ width: 350, height: 500, borderRadius: '20px', boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
        <CardMedia
          component="img"
          height="350"
          image={exercise.gifUrl}
          alt={exercise.name}
          style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}
        />
        <CardContent sx={{ backgroundColor: '#222', borderTop: '2px solid #4CAF50', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px' }}>
          <Stack direction="row" spacing={1} justifyContent="center">
            <Button variant="contained" sx={{ bgcolor: '#4CAF50', color: 'white', textTransform: 'capitalize', borderRadius: '20px', minWidth: '100px', height: '40px' }}>
              {exercise.bodyPart}
            </Button>
            <Button variant="contained" sx={{ bgcolor: '#FCC757', color: 'black', textTransform: 'capitalize', borderRadius: '20px', minWidth: '100px', height: '40px' }}>
              {exercise.target}
            </Button>
          </Stack>
          <Typography variant="h6" fontWeight="bold" textAlign="center" mt={2} mb={1} sx={{ color: 'white' }}>
            {exercise.name}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  </Grow>
);

export default ExerciseCard;
