import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  useTheme
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LocalShipping, Spa, Favorite } from '@mui/icons-material';
import { images } from '../assets/images';

const features = [
  {
    id: 1,
    title: 'Качественная косметика',
    description: 'Только проверенные бренды и натуральные ингредиенты',
    icon: <Favorite sx={{ fontSize: 40, color: 'primary.main' }} />,
    image: images.features.cosmetics,
    link: '/products'
  },
  {
    id: 2,
    title: 'Профессиональные услуги',
    description: 'Опытные мастера и современное оборудование',
    icon: <Spa sx={{ fontSize: 40, color: 'primary.main' }} />,
    image: images.features.services,
    link: '/services'
  },
  {
    id: 3,
    title: 'Уникальные процедуры',
    description: 'Индивидуальный подход к каждому клиенту',
    icon: <LocalShipping sx={{ fontSize: 40, color: 'primary.main' }} />,
    image: images.features.procedures,
    link: '/services'
  }
];

const Home = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box sx={{ minHeight: '100vh', background: theme.palette.background.default }}>
      {/* Hero Section */}
      <Box
        sx={{
          height: { xs: '60vh', md: '80vh' },
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          mb: { xs: 4, md: 8 },
          px: { xs: 2, md: 0 },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: `linear-gradient(120deg, rgba(123,108,246,0.45) 0%, rgba(246,182,216,0.45) 100%), url(${images.features.cosmetics}) center/cover no-repeat`,
            filter: 'blur(0px)',
            zIndex: 1
          }}
        />
        <Box sx={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <Typography variant="h1" sx={{ fontSize: { xs: '2rem', sm: '2.7rem', md: '4.2rem' }, mb: 2, fontWeight: 800, color: '#fff', textShadow: '0 4px 24px rgba(123,108,246,0.25)' }}>
            Sky Beauty
          </Typography>
          <Typography variant="h4" sx={{ fontSize: { xs: '1.1rem', sm: '1.5rem', md: '2.1rem' }, mb: 4, color: '#fff', textShadow: '0 2px 12px rgba(123,108,246,0.18)' }}>
            Ваш путь к красоте и гармонии
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => navigate('/products')}
            sx={{
              px: { xs: 3, md: 5 },
              py: { xs: 1.2, md: 2 },
              fontSize: { xs: '1rem', md: '1.25rem' },
              borderRadius: '30px',
              boxShadow: '0 4px 24px 0 rgba(123,108,246,0.18)',
              fontWeight: 700,
              letterSpacing: 1,
              background: 'linear-gradient(90deg, #7B6CF6 0%, #F6B6D8 100%)',
              color: '#fff',
              transition: 'all 0.3s',
              '&:hover': {
                background: 'linear-gradient(90deg, #F6B6D8 0%, #7B6CF6 100%)',
                transform: 'scale(1.05)',
                boxShadow: '0 8px 32px 0 rgba(246,182,216,0.22)'
              }
            }}
          >
            Начать покупки
          </Button>
        </Box>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 2, md: 0 } }}>
        <Typography
          variant="h2"
          align="center"
          sx={{ mb: { xs: 3, md: 6 }, fontWeight: 'bold', color: 'primary.main', letterSpacing: 1, fontSize: { xs: '1.5rem', md: '2.5rem' } }}
        >
          Почему выбирают нас
        </Typography>
        <Grid container spacing={{ xs: 2, md: 5 }}>
          {features.map((feature, idx) => (
            <Grid item xs={12} sm={6} md={4} key={feature.id}>
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
                  image={feature.image}
                  alt={feature.title}
                  sx={{ objectFit: 'cover', borderRadius: 3, mb: 2, width: '100%', maxHeight: { xs: 120, sm: 180 } }}
                />
                <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 700, fontSize: { xs: '1.1rem', md: '1.5rem' } }}>
                  {feature.title}
                </Typography>
                <Typography sx={{ mb: 2, color: 'text.secondary', minHeight: 48, fontSize: { xs: '0.95rem', md: '1.1rem' } }}>
                  {feature.description}
                </Typography>
                <Button
                  variant="outlined"
                  onClick={() => navigate(feature.link)}
                  sx={{
                    mt: 'auto',
                    borderRadius: '20px',
                    fontWeight: 600,
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    border: '2px solid',
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    background: 'rgba(123,108,246,0.04)',
                    transition: 'all 0.3s',
                    width: '100%',
                    '&:hover': {
                      background: 'linear-gradient(90deg, #7B6CF6 0%, #F6B6D8 100%)',
                      color: '#fff',
                      borderColor: 'secondary.main',
                      transform: 'scale(1.04)'
                    }
                  }}
                >
                  Подробнее
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home; 