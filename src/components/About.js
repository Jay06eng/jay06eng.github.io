import React from 'react';
import { Card, CardHeader, CardContent, Typography, Box } from '@mui/material';

const About = (props) => {
  const { about } = props || {};
  const { start, exit } = about || {};

  return (
    <Box id="about" sx={{ my: 4 }}>
      <Card sx={{ backgroundColor: '#263238', color: '#f5f5f5' }}>
        <CardHeader
          avatar={
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box component="span" className="iconify" data-icon="emojione:red-circle" sx={{ mr: 1 }} />
              <Box component="span" className="iconify" data-icon="twemoji:yellow-circle" sx={{ mr: 1 }} />
              <Box component="span" className="iconify" data-icon="twemoji:green-circle" />
            </Box>
          }
        />
        <CardContent sx={(th) => ({ fontSize: '132%', lineHeight: '150%', backgroundColor: th.palette.background.paper, color: th.palette.text.secondary, p: '2rem' })}>
          <Typography variant="body1" paragraph sx={{ textAlign: 'center' }}>
            {start}
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center' }}>{exit}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default About;

