import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 4, bgcolor: 'background.paper', mt: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Code Review Assistant — Built with care. Connect: {' '}
          <Link href="https://github.com" target="_blank" rel="noopener">GitHub</Link> • {' '}
          <Link href="https://twitter.com" target="_blank" rel="noopener">Twitter</Link>
        </Typography>
        <Typography variant="caption" color="text.secondary" align="center" display="block" sx={{ mt: 1 }}>
          Trusted by developers — AI-assisted code reviews, optimized for clarity and performance.
        </Typography>
      </Container>
    </Box>
  );
}
