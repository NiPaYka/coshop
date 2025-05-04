import React from 'react';
import {
  IconButton,
  Tooltip,
  Box,
  Fade
} from '@mui/material';
import {
  Brightness4,
  Brightness7
} from '@mui/icons-material';
import { useThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { mode, toggleTheme } = useThemeContext();

  return (
    <Fade in timeout={800}>
      <Box>
        <Tooltip title={mode === 'light' ? 'Темная тема' : 'Светлая тема'}>
          <IconButton
            onClick={toggleTheme}
            color="inherit"
            sx={{
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'scale(1.1)',
                backgroundColor: 'rgba(0, 0, 0, 0.04)'
              }
            }}
          >
            {mode === 'light' ? <Brightness4 /> : <Brightness7 />}
          </IconButton>
        </Tooltip>
      </Box>
    </Fade>
  );
};

export default ThemeToggle; 