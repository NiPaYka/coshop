import React, { useState } from 'react';
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
  Switch,
  TextField,
  Button,
  Fade,
  Grow
} from '@mui/material';
import {
  Notifications,
  Person,
  Palette,
  Security,
  Help,
  ArrowBack
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useThemeContext } from '../context/ThemeContext';

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
      id={`settings-tabpanel-${index}`}
      aria-labelledby={`settings-tab-${index}`}
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

const Settings = () => {
  const [value, setValue] = useState(0);
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    promotions: false
  });
  const [profile, setProfile] = useState({
    name: 'name surname',
    email: 'name@example.com',
    phone: '+7 (999) 123-45-67'
  });
  const navigate = useNavigate();
  const { mode, toggleTheme } = useThemeContext();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleNotificationChange = (key: string) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key as keyof typeof notifications]
    }));
  };

  const handleProfileChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setProfile(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, md: 8 }, px: { xs: 0.5, sm: 2, md: 0 } }}>
      <Fade in timeout={800}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 2, md: 4 } }}>
          <Button
            startIcon={<ArrowBack />}
            onClick={() => navigate('/profile')}
            sx={{ mr: 2, fontSize: { xs: '0.95rem', md: '1rem' }, px: { xs: 1, md: 2 }, py: { xs: 0.5, md: 1 }, borderRadius: 3 }}
          >
            Назад
          </Button>
          <Typography 
            variant="h3" 
            component="h1"
            sx={{ 
              fontWeight: 700,
              color: 'primary.main',
              fontSize: { xs: '1.2rem', md: '2rem' }
            }}
          >
            Настройки
          </Typography>
        </Box>
      </Fade>

      <Card sx={{ borderRadius: { xs: 2, md: 4 }, boxShadow: { xs: 1, md: 3 } }}>
        <CardContent sx={{ p: { xs: 1, md: 3 } }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs 
              value={value} 
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
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
                icon={<Notifications />} 
                label="Уведомления" 
                id="settings-tab-0"
              />
              <Tab 
                icon={<Person />} 
                label="Профиль" 
                id="settings-tab-1"
              />
              <Tab 
                icon={<Palette />} 
                label="Тема" 
                id="settings-tab-2"
              />
              <Tab 
                icon={<Security />} 
                label="Безопасность" 
                id="settings-tab-3"
              />
              <Tab 
                icon={<Help />} 
                label="Помощь" 
                id="settings-tab-4"
              />
            </Tabs>
          </Box>

          <TabPanel value={value} index={0}>
            <List>
              <Grow in timeout={800}>
                <ListItem>
                  <ListItemIcon>
                    <Notifications />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Email уведомления" 
                    secondary="Получать уведомления на email"
                  />
                  <Switch
                    checked={notifications.email}
                    onChange={() => handleNotificationChange('email')}
                  />
                </ListItem>
              </Grow>
              <Grow in timeout={800}>
                <ListItem>
                  <ListItemIcon>
                    <Notifications />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Push уведомления" 
                    secondary="Получать push-уведомления"
                  />
                  <Switch
                    checked={notifications.push}
                    onChange={() => handleNotificationChange('push')}
                  />
                </ListItem>
              </Grow>
              <Grow in timeout={800}>
                <ListItem>
                  <ListItemIcon>
                    <Notifications />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Рекламные рассылки" 
                    secondary="Получать информацию о скидках и акциях"
                  />
                  <Switch
                    checked={notifications.promotions}
                    onChange={() => handleNotificationChange('promotions')}
                  />
                </ListItem>
              </Grow>
            </List>
          </TabPanel>

          <TabPanel value={value} index={1}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Grow in timeout={800}>
                  <TextField
                    fullWidth
                    label="Имя"
                    value={profile.name}
                    onChange={handleProfileChange('name')}
                    sx={{ mb: 2 }}
                  />
                </Grow>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grow in timeout={800}>
                  <TextField
                    fullWidth
                    label="Email"
                    value={profile.email}
                    onChange={handleProfileChange('email')}
                    sx={{ mb: 2 }}
                  />
                </Grow>
              </Grid>
              <Grid item xs={12} md={6}>
                <Grow in timeout={800}>
                  <TextField
                    fullWidth
                    label="Телефон"
                    value={profile.phone}
                    onChange={handleProfileChange('phone')}
                    sx={{ mb: 2 }}
                  />
                </Grow>
              </Grid>
              <Grid item xs={12}>
                <Grow in timeout={800}>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                  >
                    Сохранить изменения
                  </Button>
                </Grow>
              </Grid>
            </Grid>
          </TabPanel>

          <TabPanel value={value} index={2}>
            <List>
              <Grow in timeout={800}>
                <ListItem>
                  <ListItemIcon>
                    <Palette />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Тёмная тема" 
                    secondary="Использовать тёмную тему интерфейса"
                  />
                  <Switch 
                    checked={mode === 'dark'}
                    onChange={toggleTheme}
                  />
                </ListItem>
              </Grow>
            </List>
          </TabPanel>

          <TabPanel value={value} index={3}>
            <List>
              <Grow in timeout={800}>
                <ListItem>
                  <ListItemIcon>
                    <Security />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Двухфакторная аутентификация" 
                    secondary="Дополнительная защита вашего аккаунта"
                  />
                  <Switch />
                </ListItem>
              </Grow>
              <Grow in timeout={800}>
                <ListItem>
                  <ListItemIcon>
                    <Security />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Смена пароля" 
                    secondary="Обновить пароль для входа"
                  />
                  <Button variant="outlined" color="primary">
                    Изменить
                  </Button>
                </ListItem>
              </Grow>
            </List>
          </TabPanel>

          <TabPanel value={value} index={4}>
            <List>
              <Grow in timeout={800}>
                <ListItem>
                  <ListItemIcon>
                    <Help />
                  </ListItemIcon>
                  <ListItemText 
                    primary="FAQ" 
                    secondary="Часто задаваемые вопросы"
                  />
                  <Button variant="outlined" color="primary">
                    Открыть
                  </Button>
                </ListItem>
              </Grow>
              <Grow in timeout={800}>
                <ListItem>
                  <ListItemIcon>
                    <Help />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Связаться с поддержкой" 
                    secondary="Написать в службу поддержки"
                  />
                  <Button variant="outlined" color="primary">
                    Написать
                  </Button>
                </ListItem>
              </Grow>
            </List>
          </TabPanel>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Settings; 