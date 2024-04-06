import React from 'react';
import { Typography, Box, Stack, IconButton } from '@mui/material';
import { PlayCircleOutline } from '@mui/icons-material';
import Loader from './Loader';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px">
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
        Take help from <span style={{ color: 'grey', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
        {exerciseVideos?.slice(0, 3)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Box sx={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', '&:hover .overlay': { opacity: 1 } }}>
              <img src={item.video.thumbnails[0].url} alt={item.video.title} style={{ width: '100%', borderTopLeftRadius: '20px' }} />
              <Box className="overlay" sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0, transition: 'opacity 0.3s ease-in-out' }}>
                <IconButton size="large" sx={{ color: '#FFF', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                  <PlayCircleOutline fontSize="large" />
                </IconButton>
              </Box>
            </Box>
            <Box>
              <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#000">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
