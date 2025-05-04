import React, { useState, useCallback } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  useTheme,
  useMediaQuery,
  Slide,
  useScrollTrigger,
  SwipeableDrawer,
  Divider
} from '@mui/material';
import {
  Menu as MenuIcon,
  ShoppingCart,
  Person,
  Settings,
  Home,
  Store,
  Spa,
  Close
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useSwipeable } from 'react-swipeable';

const HideOnScroll = ({ children }: { children: React.ReactElement }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = useCallback(() => {
    setDrawerOpen((prev) => !prev);
  }, []);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setDrawerOpen(false),
    onSwipedRight: () => setDrawerOpen(true),
    trackMouse: true
  });

  const menuItems = [
    { text: 'Главная', icon: <Home />, path: '/' },
    { text: 'Товары', icon: <Store />, path: '/products' },
    { text: 'Услуги', icon: <Spa />, path: '/services' },
    { text: 'Корзина', icon: <ShoppingCart />, path: '/cart' },
    { text: 'Профиль', icon: <Person />, path: '/profile' },
    { text: 'Настройки', icon: <Settings />, path: '/settings' }
  ];

  const drawer = (
    <Box sx={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'primary.main' }}>
          Sky Beauty
        </Typography>
        <IconButton onClick={handleDrawerToggle}>
          <Close />
        </IconButton>
      </Box>
      <Divider />
      <List sx={{ flexGrow: 1 }}>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            onClick={() => {
              navigate(item.path);
              handleDrawerToggle();
            }}
            sx={{
              py: 2,
              '&:hover': {
                backgroundColor: 'rgba(123,108,246,0.08)'
              }
            }}
          >
            <ListItemIcon sx={{ minWidth: 40, color: 'primary.main' }}>{item.icon}</ListItemIcon>
            <ListItemText 
              primary={item.text} 
              primaryTypographyProps={{ 
                sx: { 
                  fontWeight: 600,
                  fontSize: '1.1rem'
                } 
              }} 
            />
          </ListItem>
        ))}
      </List>
      <Box sx={{ p: 2, borderTop: 1, borderColor: 'divider' }}>
        <ThemeToggle />
      </Box>
    </Box>
  );

  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          sx={{
            background: theme.palette.mode === 'light' 
              ? 'rgba(255, 255, 255, 0.95)' 
              : 'rgba(18, 18, 18, 0.95)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
          }}
        >
          <Toolbar sx={{ minHeight: { xs: 56, md: 64 } }}>
            {isMobile && (
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                cursor: 'pointer',
                fontWeight: 'bold',
                color: 'primary.main',
                fontSize: { xs: '1.1rem', md: '1.25rem' }
              }}
              onClick={() => navigate('/')}
            >
              Sky Beauty
            </Typography>
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 2 }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.text}
                    color="inherit"
                    startIcon={item.icon}
                    onClick={() => navigate(item.path)}
                    sx={{
                      color: 'text.primary',
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: 'rgba(123,108,246,0.08)'
                      }
                    }}
                  >
                    {item.text}
                  </Button>
                ))}
              </Box>
            )}
            <ThemeToggle />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      
      <SwipeableDrawer
        {...swipeHandlers}
        anchor="left"
        open={drawerOpen}
        onOpen={handleDrawerToggle}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            background: theme.palette.background.default,
            width: { xs: '100%', sm: 320 }
          }
        }}
      >
        {drawer}
      </SwipeableDrawer>
    </>
  );
};

export default Navbar; 