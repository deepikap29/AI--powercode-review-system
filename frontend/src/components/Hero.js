import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function Hero() {
  return (
    <Box sx={{ py: 8, background: 'linear-gradient(135deg,#081227 0%, #071226 60%, rgba(106,17,203,0.12) 100%)' }}>
      <Container maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ color: 'text.primary' }}>
          Professional Code Review Assistant
        </Typography>
        <Typography variant="h6" color="text.secondary" align="center" paragraph>
          Get optimized code and actionable suggestions instantly using a modern, responsive frontend connected to your analysis backend.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Button variant="contained" size="large" component={RouterLink} to="#analyzer">
            Analyze Code Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
