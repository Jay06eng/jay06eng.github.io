import React from 'react';
import { Box, Typography } from '@mui/material';

const SkillsItems = ({ config, noWrap }) => {
  return (
    <Box sx={{ display: 'flex', flexWrap: noWrap ? 'nowrap' : 'wrap', justifyContent: 'center', gap: noWrap ? 1 : 2 }}>
      {config.map((item) => (
        <Box
          key={item.id}
          sx={{
            color: '#263238',
            textAlign: 'center',
            p: noWrap ? '0.9rem' : '1.5rem',
            bgcolor: '#ffffff',
            m: noWrap ? '0.4rem' : { xs: '0.5rem', sm: '1rem', md: '1.5rem' },
            borderRadius: '15px',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s, box-shadow 0.3s',
            minWidth: noWrap ? 90 : undefined,
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0px 6px 30px rgba(0, 0, 0, 0.15)',
              cursor: 'pointer'
            }
          }}
        >
          {item.icon}
          <Typography variant="body2" sx={{ mt: '0.6rem', fontWeight: 'bold' }}>
            {item.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default SkillsItems;

