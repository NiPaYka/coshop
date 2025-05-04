import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Chip,
  TextField,
  InputAdornment,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Fade
} from '@mui/material';
import { Search, CalendarToday, AccessTime } from '@mui/icons-material';
import { images } from '../assets/images';

const services = [
  {
    id: 1,
    name: 'Массаж лица',
    price: 3000,
    duration: '60 мин',
    category: 'Уход за лицом',
    image: images.services.faceMassage,
    description: 'Профессиональный массаж для омоложения и тонизирования кожи лица'
  },
  {
    id: 2,
    name: 'СПА-массаж',
    price: 4500,
    duration: '90 мин',
    category: 'Массаж',
    image: images.services.spaMassage,
    description: 'Расслабляющий массаж всего тела с использованием ароматических масел'
  },
  {
    id: 3,
    name: 'Вечерний макияж',
    price: 2500,
    duration: '45 мин',
    category: 'Макияж',
    image: images.services.eveningMakeup,
    description: 'Создание идеального вечернего образа'
  },
  {
    id: 6,
    name: 'Дневной макияж',
    price: 2000,
    duration: '30 мин',
    category: 'Макияж',
    image: images.services.dayMakeup,
    description: 'Естественный макияж для повседневного образа'
  }
];

const categories = ['Все', 'Уход за лицом', 'Массаж', 'Макияж'];
const timeSlots = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState<any>(null);
  const [bookingDialogOpen, setBookingDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const theme = useTheme();
  const navigate = useNavigate();

  const handleBooking = (service: typeof services[0]) => {
    // Здесь будет логика записи на услугу
    navigate('/booking');
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      const currentIndex = categories.indexOf(selectedCategory);
      if (currentIndex < categories.length - 1) {
        setSelectedCategory(categories[currentIndex + 1]);
      }
    },
    onSwipedRight: () => {
      const currentIndex = categories.indexOf(selectedCategory);
      if (currentIndex > 0) {
        setSelectedCategory(categories[currentIndex - 1]);
      }
    },
    trackMouse: true
  });

  const filteredServices = services.filter(service => {
    const matchesCategory = selectedCategory === 'Все' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleClose = () => {
    setBookingDialogOpen(false);
    setSelectedService(null);
    setSelectedDate('');
    setSelectedTime('');
  };

  const handleConfirmBooking = () => {
    // Здесь будет логика подтверждения бронирования
    handleClose();
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 }, px: { xs: 1, sm: 2, md: 0 } }}>
      <Fade in timeout={700}>
        <Typography variant="h2" align="center" sx={{ mb: { xs: 3, md: 6 }, fontWeight: 'bold', color: 'primary.main', letterSpacing: 1, fontSize: { xs: '1.5rem', md: '2.5rem' } }}>
          Наши услуги
        </Typography>
      </Fade>

      <Box sx={{ mb: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Поиск услуг..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '30px',
              backgroundColor: theme.palette.background.paper,
              boxShadow: '0 2px 12px 0 rgba(123,108,246,0.06)'
            }
          }}
        />

        <Box {...swipeHandlers} sx={{ display: 'flex', gap: 1, overflowX: 'auto', pb: 1, scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
          {categories.map((category) => (
            <Chip
              key={category}
              label={category}
              onClick={() => setSelectedCategory(category)}
              color={selectedCategory === category ? 'primary' : 'default'}
              sx={{
                borderRadius: '20px',
                fontWeight: 600,
                fontSize: { xs: '0.95rem', md: '1rem' },
                background: selectedCategory === category ? 'linear-gradient(90deg, #7B6CF6 0%, #F6B6D8 100%)' : '#fff',
                color: selectedCategory === category ? '#fff' : theme.palette.text.primary,
                boxShadow: selectedCategory === category ? '0 2px 8px 0 rgba(123,108,246,0.10)' : 'none',
                transition: 'all 0.3s',
                '&:hover': {
                  background: 'linear-gradient(90deg, #F6B6D8 0%, #7B6CF6 100%)',
                  color: '#fff',
                  transform: 'scale(1.05)'
                }
              }}
            />
          ))}
        </Box>
      </Box>

      <Grid container spacing={{ xs: 2, md: 5 }}>
        {filteredServices.map((service, idx) => (
          <Fade in timeout={600 + idx * 100} key={service.id}>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: { xs: 1.5, md: 2 },
                  borderRadius: 5,
                  boxShadow: '0 4px 32px 0 rgba(123,108,246,0.10)',
                  background: '#fff',
                  transition: 'box-shadow 0.3s, transform 0.3s',
                  '&:hover': {
                    boxShadow: '0 8px 40px 0 rgba(246,182,216,0.18)',
                    transform: 'translateY(-6px) scale(1.04)',
                  }
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={service.image}
                  alt={service.name}
                  sx={{ 
                    objectFit: 'cover', 
                    borderRadius: 3, 
                    mb: 2, 
                    width: '100%', 
                    maxHeight: { xs: 120, sm: 180 },
                    aspectRatio: '1/1'
                  }}
                />
                <CardContent sx={{ width: '100%', p: { xs: 1, md: 2 } }}>
                  <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="h2" 
                    sx={{ 
                      fontWeight: 700, 
                      fontSize: { xs: '1.1rem', md: '1.5rem' },
                      mb: { xs: 1, md: 2 }
                    }}
                  >
                    {service.name}
                  </Typography>
                  <Typography 
                    sx={{ 
                      mb: 2, 
                      color: 'text.secondary', 
                      minHeight: { xs: 'auto', md: 48 },
                      fontSize: { xs: '0.9rem', md: '1.1rem' },
                      lineHeight: 1.4
                    }}
                  >
                    {service.description}
                  </Typography>
                  <Box sx={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    mb: 2,
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: { xs: 1, sm: 0 }
                  }}>
                    <Typography 
                      variant="h6" 
                      color="primary" 
                      sx={{ 
                        fontWeight: 700, 
                        fontSize: { xs: '1.2rem', md: '1.4rem' }
                      }}
                    >
                      {service.price} ₽
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{ 
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.5
                      }}
                    >
                      <AccessTime sx={{ fontSize: { xs: '1rem', md: '1.2rem' } }} />
                      {service.duration}
                    </Typography>
                  </Box>
                  <Button
                    variant="contained"
                    fullWidth
                    startIcon={<CalendarToday />}
                    onClick={() => handleBooking(service)}
                    sx={{
                      borderRadius: '20px',
                      fontWeight: 600,
                      fontSize: { xs: '0.9rem', md: '1rem' },
                      py: { xs: 0.5, md: 1 },
                      boxShadow: '0 2px 8px 0 rgba(123,108,246,0.10)',
                      transition: 'all 0.3s',
                      '&:hover': {
                        transform: 'scale(1.04)',
                        background: 'linear-gradient(90deg, #F6B6D8 0%, #7B6CF6 100%)',
                        color: '#fff',
                      }
                    }}
                  >
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Fade>
        ))}
      </Grid>

      <Dialog open={bookingDialogOpen} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Запись на услугу</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 2 }}>
            <Typography variant="h6">{selectedService?.name}</Typography>
            <Typography color="text.secondary">{selectedService?.description}</Typography>
            <Typography variant="h6" color="primary">
              {selectedService?.price} ₽
            </Typography>
            <FormControl fullWidth>
              <InputLabel>Дата</InputLabel>
              <Select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                label="Дата"
              >
                <MenuItem value="2024-03-20">20 марта 2024</MenuItem>
                <MenuItem value="2024-03-21">21 марта 2024</MenuItem>
                <MenuItem value="2024-03-22">22 марта 2024</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Время</InputLabel>
              <Select
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                label="Время"
              >
                {timeSlots.map((time) => (
                  <MenuItem key={time} value={time}>
                    {time}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button
            variant="contained"
            onClick={handleConfirmBooking}
            disabled={!selectedDate || !selectedTime}
          >
            Подтвердить
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Services; 