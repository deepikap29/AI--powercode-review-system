import React from 'react';
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Box, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InfoIcon from '@mui/icons-material/Info';
import { Link as RouterLink } from 'react-router-dom';

export default function Sidebar({ open, onClose }) {
  return (
    <Drawer open={open} onClose={onClose} variant="temporary">
      <Box sx={{ width: 250 }} role="presentation" onClick={onClose} onKeyDown={onClose}>
        <List>
          <ListItemButton component={RouterLink} to="/">
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton component={RouterLink} to="/dashboard">
            <ListItemIcon><DashboardIcon /></ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <Divider />
          <ListItemButton component={RouterLink} to="/about">
            <ListItemIcon><InfoIcon /></ListItemIcon>
            <ListItemText primary="About" />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
}
