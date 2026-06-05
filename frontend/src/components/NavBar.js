import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Link as RouterLink } from 'react-router-dom';

export default function NavBar({ themeMode, setThemeMode }) {
  const [open, setOpen] = React.useState(false);
  return (
    <Box sx={{ flexGrow: 1, mb: 4 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Box component="img" src={process.env.PUBLIC_URL + '/logo.svg'} alt="logo" sx={{ width: 36, height: 36, mr: 1 }} />
            <Typography variant="h6" component="div">
              Code Review Assistant
            </Typography>
          </Box>
          <Button color="inherit" component={RouterLink} to="/dashboard">
            Dashboard
          </Button>
          <Button color="inherit" component={RouterLink} to="/about">
            About
          </Button>
          <IconButton sx={{ ml: 1 }} color="inherit" onClick={() => setThemeMode(themeMode === 'premium' ? 'light' : 'premium')}>
            {themeMode === 'premium' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Sidebar open={open} onClose={() => setOpen(false)} />
    </Box>
  );
}
