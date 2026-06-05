import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

export default function Onboarding() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const dismissed = localStorage.getItem('onboardingDismissed');
      if (!dismissed) setOpen(true);
    } catch (e) {
      setOpen(true);
    }
  }, []);

  const handleClose = (dismiss = false) => {
    if (dismiss) localStorage.setItem('onboardingDismissed', '1');
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={() => handleClose()} maxWidth="sm" fullWidth>
      <DialogTitle>Welcome to Code Review Assistant</DialogTitle>
      <DialogContent>
        <Typography variant="body1" paragraph>
          This premium interface gives you instant, AI-powered code corrections and actionable suggestions. Use the "Analyze" panel to paste code or send from your editor.
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Quick tips: Try analyzing a Python or JavaScript file. Visit the Dashboard to view analytics and recent analyses.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleClose(false)}>Close</Button>
        <Button variant="contained" onClick={() => handleClose(true)}>Don't show again</Button>
      </DialogActions>
    </Dialog>
  );
}
