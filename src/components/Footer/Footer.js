import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import FooterItems from './FooterItems';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: '#fff', mt: 6 }}>
      <Container maxWidth="lg" sx={{ py: 5, textAlign: 'center' }}>
        <FooterItems />
        <Typography variant="body1" sx={{ display: 'block', mt: 2, opacity: 0.75 }}>
          © {new Date().getFullYear()} Javier Bonilla
        </Typography>
      </Container>
    </Box>
  );
}


