import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Button,
  Divider,
  Fade,
  Grow
} from '@mui/material';
import {
  Person,
  ShoppingCart,
  Settings,
  Notifications,
  Palette,
  Security,
  Help,
  Logout
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const UserProfile = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (value < 1) {
        setValue(value + 1);
      }
    },
    onSwipedRight: () => {
      if (value > 0) {
        setValue(value - 1);
      }
    },
    trackMouse: true
  });

  const orders = [
    {
      id: 1,
      date: '2024-03-15',
      total: 179.98,
      status: 'Доставлен',
      items: ['Hydrating Face Cream', 'Luxury Perfume']
    },
    {
      id: 2,
      date: '2024-03-10',
      total: 89.99,
      status: 'В обработке',
      items: ['Men\'s Grooming Kit']
    }
  ];

  const settings = [
    { icon: <Person />, text: 'Личная информация', path: '/settings/profile' },
    { icon: <Notifications />, text: 'Уведомления', path: '/settings/notifications' },
    { icon: <Palette />, text: 'Тема', path: '/settings/theme' },
    { icon: <Security />, text: 'Безопасность', path: '/settings/security' },
    { icon: <Help />, text: 'Помощь', path: '/settings/help' }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, px: { xs: 1, sm: 2, md: 0 } }}>
      <Fade in timeout={800}>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={{ 
            textAlign: 'center',
            mb: { xs: 3, md: 6 },
            fontWeight: 700,
            color: 'primary.main',
            fontSize: { xs: '1.5rem', md: '2.5rem' }
          }}
        >
          Профиль пользователя
        </Typography>
      </Fade>
      <Grid container spacing={{ xs: 2, md: 4 }}>
        <Grid item xs={12} md={4}>
          <Grow in timeout={800}>
            <Card>
              <CardContent sx={{ textAlign: 'center' }}>
                <Avatar
                  sx={{ 
                    width: { xs: 80, md: 120 }, 
                    height: { xs: 80, md: 120 }, 
                    mx: 'auto',
                    mb: 2,
                    bgcolor: 'primary.main'
                  }}
                >
                  <Person sx={{ fontSize: { xs: 40, md: 60 } }} />
                </Avatar>
                <Typography variant="h5" gutterBottom sx={{ fontSize: { xs: '1.1rem', md: '1.5rem' } }}>
                  Иван Иванов
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom sx={{ fontSize: { xs: '0.95rem', md: '1rem' } }}>
                  ivan@example.com
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ mt: 2, fontSize: { xs: '0.95rem', md: '1rem' }, px: { xs: 2, md: 3 }, py: { xs: 1, md: 1.2 }, width: { xs: '100%', md: 'auto' } }}
                  onClick={() => navigate('/settings/profile')}
                >
                  Редактировать профиль
                </Button>
              </CardContent>
            </Card>
          </Grow>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs 
                  value={value} 
                  onChange={handleChange}
                  variant="fullWidth"
                  sx={{
                    minHeight: { xs: 36, md: 48 },
                    '& .MuiTab-root': {
                      fontSize: { xs: '0.95rem', md: '1.1rem' },
                      minHeight: { xs: 36, md: 48 },
                      px: { xs: 1, md: 2 }
                    }
                  }}
                >
                  <Tab 
                    icon={<ShoppingCart />} 
                    label="История заказов" 
                    id="profile-tab-0"
                  />
                  <Tab 
                    icon={<Settings />} 
                    label="Настройки" 
                    id="profile-tab-1"
                  />
                </Tabs>
              </Box>

              <Box {...swipeHandlers}>
                <TabPanel value={value} index={0}>
                  <List sx={{ p: 0 }}>
                    {orders.map((order) => (
                      <Grow in timeout={800} key={order.id}>
                        <Card sx={{ mb: 2, width: '100%' }}>
                          <CardContent sx={{ p: { xs: 1.5, md: 2 } }}>
                            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', mb: 1 }}>
                              <Typography variant="subtitle1" sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}>
                                Заказ #{order.id}
                              </Typography>
                              <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.95rem', md: '1rem' }, mt: { xs: 0.5, sm: 0 } }}>
                                {order.date}
                              </Typography>
                            </Box>
                            <Typography variant="body2" color="text.secondary" gutterBottom sx={{ fontSize: { xs: '0.95rem', md: '1rem' } }}>
                              {order.items.join(', ')}
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', mt: 1, gap: { xs: 1, sm: 0 } }}>
                              <Typography variant="h6" color="primary.main" sx={{ fontSize: { xs: '1.1rem', md: '1.3rem' } }}>
                                ${order.total.toFixed(2)}
                              </Typography>
                              <Typography 
                                variant="body2" 
                                sx={{ 
                                  color: order.status === 'Доставлен' ? 'success.main' : 'warning.main',
                                  fontSize: { xs: '0.95rem', md: '1rem' }
                                }}
                              >
                                {order.status}
                              </Typography>
                            </Box>
                          </CardContent>
                        </Card>
                      </Grow>
                    ))}
                  </List>
                </TabPanel>

                <TabPanel value={value} index={1}>
                  <List sx={{ p: 0 }}>
                    {settings.map((setting, index) => (
                      <Grow in timeout={800} key={index}>
                        <ListItem 
                          button 
                          onClick={() => navigate(setting.path)}
                          sx={{ 
                            mb: 1,
                            borderRadius: 1,
                            '&:hover': {
                              bgcolor: 'action.hover'
                            },
                            px: { xs: 1, md: 2 },
                            py: { xs: 1, md: 1.5 }
                          }}
                        >
                          <ListItemIcon sx={{ minWidth: { xs: 32, md: 40 } }}>
                            {setting.icon}
                          </ListItemIcon>
                          <ListItemText primary={setting.text} primaryTypographyProps={{ fontSize: { xs: '0.98rem', md: '1.1rem' } }} />
                        </ListItem>
                      </Grow>
                    ))}
                    <Divider sx={{ my: 2 }} />
                    <ListItem 
                      button 
                      sx={{ 
                        color: 'error.main',
                        borderRadius: 1,
                        '&:hover': {
                          bgcolor: 'error.light',
                          color: 'error.contrastText'
                        },
                        px: { xs: 1, md: 2 },
                        py: { xs: 1, md: 1.5 }
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: { xs: 32, md: 40 } }}>
                        <Logout color="error" />
                      </ListItemIcon>
                      <ListItemText primary="Выйти" primaryTypographyProps={{ fontSize: { xs: '0.98rem', md: '1.1rem' } }} />
                    </ListItem>
                  </List>
                </TabPanel>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default UserProfile; 