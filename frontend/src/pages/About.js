import React from 'react';
import { Container, Typography, Box } from '@mui/material';

export default function About() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>About</Typography>
      <Typography paragraph>
        This frontend is a professional, responsive interface built with Material UI. It connects to the backend `/analyze` endpoint to produce optimized code and suggestions.
      </Typography>
      <Box sx={{ mt: 3 }}>
        <Typography variant="h6">Features</Typography>
        <ul>
          <li>Modern MUI design system and theme</li>
          <li>Responsive layout and components</li>
          <li>Code analysis integration with backend</li>
        </ul>
      </Box>
    </Container>
  );
}
