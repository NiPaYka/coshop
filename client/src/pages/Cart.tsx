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
import { Delete as DeleteIcon, Add, Remove, ShoppingCart } from '@mui/icons-material';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, increase, decrease, clearCart } = useCart();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    window.open('https://t.me/Nipayka', '_blank');
    clearCart();
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, md: 8 }, px: { xs: 0.5, sm: 2, md: 0 } }}>
      <Fade in timeout={800}>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={{ 
            textAlign: 'center',
            mb: { xs: 2, md: 6 },
            fontWeight: 700,
            color: 'primary.main',
            fontSize: { xs: '1.2rem', md: '2.5rem' }
          }}
        >
          Корзина
        </Typography>
      </Fade>

      {cartItems.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: { xs: 4, md: 8 } }}>
          <ShoppingCart sx={{ fontSize: { xs: 48, md: 64 }, color: 'text.secondary', mb: 2 }} />
          <Typography variant="h5" color="text.secondary" gutterBottom sx={{ fontSize: { xs: '1rem', md: '1.5rem' } }}>
            Ваша корзина пуста
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ mt: 2, fontSize: { xs: '0.95rem', md: '1.2rem' }, px: { xs: 2, md: 5 }, py: { xs: 1, md: 2 }, borderRadius: 3 }}
            href="/products"
          >
            Перейти к товарам
          </Button>
        </Box>
      ) : (
        <Grid container spacing={{ xs: 1, md: 4 }}>
          <Grid item xs={12} md={8}>
            {cartItems.map((item) => (
              <Card key={item.id} sx={{ mb: { xs: 1, md: 2 }, borderRadius: { xs: 2, md: 4 }, boxShadow: { xs: 1, md: 3 } }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'stretch', sm: 'center' } }}>
                  <CardMedia
                    component="img"
                    sx={{ width: { xs: '100%', sm: 150 }, height: { xs: 140, sm: 150 }, objectFit: 'cover', borderRadius: { xs: '8px 8px 0 0', sm: '8px 0 0 8px' } }}
                    image={item.image}
                    alt={item.name}
                  />
                  <CardContent sx={{ flex: 1, display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'stretch', sm: 'center' }, width: '100%', p: { xs: 1, md: 2 } }}>
                    <Box sx={{ mb: { xs: 2, sm: 0 } }}>
                      <Typography variant="h6" component="div" sx={{ fontSize: { xs: '1rem', md: '1.3rem' }, mb: 0.5 }}>
                        {item.name}
                      </Typography>
                      <Typography variant="body1" color="primary.main" sx={{ fontSize: { xs: '0.95rem', md: '1.1rem' }, mb: 0.5 }}>
                        ${item.price.toFixed(2)}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                        <IconButton size="medium" sx={{ p: 0.5 }} onClick={() => decrease(item.id)}>
                          <Remove fontSize="small" />
                        </IconButton>
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, mx: 1, minWidth: 24, textAlign: 'center' }}>
                          {item.quantity}
                        </Typography>
                        <IconButton size="medium" sx={{ p: 0.5 }} onClick={() => increase(item.id)}>
                          <Add fontSize="small" />
                        </IconButton>
                      </Box>
                    </Box>
                    <IconButton color="error" sx={{ alignSelf: { xs: 'flex-end', sm: 'center' }, mt: { xs: 1, sm: 0 } }} onClick={() => removeFromCart(item.id)}>
                      <DeleteIcon fontSize="medium" />
                    </IconButton>
                  </CardContent>
                </Box>
              </Card>
            ))}
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ borderRadius: { xs: 2, md: 4 }, boxShadow: { xs: 1, md: 3 }, mt: { xs: 2, md: 0 } }}>
              <CardContent sx={{ p: { xs: 2, md: 3 } }}>
                <Typography variant="h6" gutterBottom sx={{ fontSize: { xs: '1rem', md: '1.3rem' } }}>
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
                  onClick={handlePlaceOrder}
                  sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, py: { xs: 1, md: 2 }, borderRadius: 3 }}
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