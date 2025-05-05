import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Avatar } from '@mui/material';
import { Star } from '@mui/icons-material';

const testimonials = [
  {
    id: 1,
    name: 'Анна',
    role: 'Клиент',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fHww',
    text: 'Отличный сервис и качественные продукты! Очень довольна результатом.',
    rating: 5
  },
  {
    id: 2,
    name: 'Мария',
    role: 'Клиент',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww',
    text: 'Профессиональные мастера и приятная атмосфера. Рекомендую!',
    rating: 5
  },
  {
    id: 3,
    name: 'Елена',
    role: 'Клиент',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww',
    text: 'Широкий ассортимент косметики и приятные цены. Буду постоянным клиентом!',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <Box sx={{ py: 8, background: 'linear-gradient(120deg, rgba(123,108,246,0.05) 0%, rgba(246,182,216,0.05) 100%)' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          align="center"
          sx={{ mb: 6, fontWeight: 'bold', color: 'primary.main', letterSpacing: 1 }}
        >
          Отзывы наших клиентов
        </Typography>
        <Grid container spacing={4}>
          {testimonials.map((testimonial) => (
            <Grid item xs={12} md={4} key={testimonial.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  p: 3,
                  borderRadius: 4,
                  boxShadow: '0 4px 24px 0 rgba(123,108,246,0.10)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 32px 0 rgba(246,182,216,0.18)',
                  }
                }}
              >
                <Avatar
                  src={testimonial.image}
                  alt={testimonial.name}
                  sx={{ width: 80, height: 80, mb: 2 }}
                />
                <Box sx={{ display: 'flex', mb: 2 }}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} sx={{ color: '#FFD700', fontSize: 20 }} />
                  ))}
                </Box>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 2,
                    textAlign: 'center',
                    fontStyle: 'italic',
                    color: 'text.secondary',
                    fontSize: '1.1rem'
                  }}
                >
                  "{testimonial.text}"
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {testimonial.role}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials; 