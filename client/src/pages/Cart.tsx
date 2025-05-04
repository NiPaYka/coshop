import React from 'react';
import { 
  Container, 
  Typography, 
  Box, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button,
  IconButton,
  Fade
} from '@mui/material';
import { Delete as DeleteIcon, ShoppingCart } from '@mui/icons-material';
import { images } from '../assets/images';

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: 'Hydrating Face Cream',
      price: 49.99,
      image: images.products.faceCream,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Luxury Perfume',
      price: 129.99,
      image: images.products.perfume,
      quantity: 1,
    },
  ];

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

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
          Корзина
        </Typography>
      </Fade>

      {cartItems.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <ShoppingCart sx={{ fontSize: 64, color: 'text.secondary', mb: 2 }} />
          <Typography variant="h5" color="text.secondary" gutterBottom sx={{ fontSize: { xs: '1.1rem', md: '1.5rem' } }}>
            Ваша корзина пуста
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2, fontSize: { xs: '1rem', md: '1.2rem' }, px: { xs: 3, md: 5 }, py: { xs: 1.2, md: 2 } }}
          >
            Перейти к товарам
          </Button>
        </Box>
      ) : (
        <Grid container spacing={{ xs: 2, md: 4 }}>
          <Grid item xs={12} md={8}>
            {cartItems.map((item) => (
              <Card key={item.id} sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'flex-start', sm: 'center' } }}>
                  <CardMedia
                    component="img"
                    sx={{ width: { xs: '100%', sm: 150 }, height: { xs: 180, sm: 150 }, objectFit: 'cover' }}
                    image={item.image}
                    alt={item.name}
                  />
                  <CardContent sx={{ flex: 1, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, width: '100%' }}>
                    <Box sx={{ mb: { xs: 2, sm: 0 } }}>
                      <Typography variant="h6" component="div" sx={{ fontSize: { xs: '1.1rem', md: '1.3rem' } }}>
                        {item.name}
                      </Typography>
                      <Typography variant="body1" color="primary.main" sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}>
                        ${item.price.toFixed(2)}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.95rem', md: '1rem' } }}>
                        Количество: {item.quantity}
                      </Typography>
                    </Box>
                    <IconButton color="error" sx={{ alignSelf: { xs: 'flex-end', sm: 'center' } }}>
                      <DeleteIcon />
                    </IconButton>
                  </CardContent>
                </Box>
              </Card>
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1.1rem', md: '1.3rem' } }}>
                  Итого
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography>Товары</Typography>
                  <Typography>${total.toFixed(2)}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography>Доставка</Typography>
                  <Typography>Бесплатно</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                  <Typography variant="h6">Всего</Typography>
                  <Typography variant="h6" color="primary.main">
                    ${total.toFixed(2)}
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  size="large"
                  sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, py: { xs: 1.2, md: 2 } }}
                >
                  Оформить заказ
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Cart; 