import React, { useState } from 'react';
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
  Fade
} from '@mui/material';
import { Search, ShoppingCart } from '@mui/icons-material';
import { images } from '../assets/images';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import { useCart } from '../context/CartContext';

const products = [
  {
    id: 1,
    name: 'Увлажняющий крем для лица',
    price: 2500,
    category: 'Уход за лицом',
    image: images.products.faceCream,
    description: 'Интенсивное увлажнение и питание кожи'
  },
  {
    id: 2,
    name: 'Набор для мужского ухода',
    price: 3500,
    category: 'Мужская косметика',
    image: images.products.mensGrooming,
    description: 'Комплексный уход за мужской кожей'
  },
  {
    id: 3,
    name: 'Парфюмерная вода',
    price: 4500,
    category: 'Парфюмерия',
    image: images.products.perfume,
    description: 'Утонченный аромат с нотками цветов'
  },
  {
    id: 4,
    name: 'Набор декоративной косметики',
    price: 5500,
    category: 'Макияж',
    image: images.products.makeupSet,
    description: 'Все необходимое для создания идеального образа'
  },
  {
    id: 6,
    name: 'Мужской парфюм',
    price: 4200,
    category: 'Парфюмерия',
    image: images.products.mensCologne,
    description: 'Свежий и мужественный аромат'
  }
];

const categories = ['Все', 'Уход за лицом', 'Мужская косметика', 'Парфюмерия', 'Макияж'];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [searchQuery, setSearchQuery] = useState('');
  const theme = useTheme();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
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

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'Все' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, md: 8 }, px: { xs: 0.5, sm: 2, md: 0 } }}>
      <Fade in timeout={700}>
        <Typography variant="h2" align="center" sx={{ mb: { xs: 2, md: 6 }, fontWeight: 'bold', color: 'primary.main', letterSpacing: 1, fontSize: { xs: '1.2rem', md: '2.5rem' } }}>
          Наши продукты
        </Typography>
      </Fade>

      <Box sx={{ mb: 3, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Поиск товаров..."
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
              boxShadow: '0 2px 12px 0 rgba(123,108,246,0.06)',
              fontSize: { xs: '1rem', md: '1.1rem' },
              minHeight: { xs: 40, md: 48 }
            }
          }}
        />

        <Box {...swipeHandlers} sx={{ display: 'flex', gap: 1, overflowX: 'auto', pb: 1, scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' }, mx: { xs: -1, md: 0 }, px: { xs: 1, md: 0 } }}>
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
                px: { xs: 2, md: 3 },
                py: { xs: 1, md: 1.5 },
                minWidth: { xs: 90, md: 110 },
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
        {filteredProducts.map((product, idx) => (
          <Fade in timeout={600 + idx * 100} key={product.id}>
            <Grid item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: { xs: 1, md: 2 },
                  borderRadius: { xs: 3, md: 5 },
                  boxShadow: { xs: 1, md: 3 },
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
                  image={product.image}
                  alt={product.name}
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
                      fontSize: { xs: '1rem', md: '1.3rem' },
                      mb: 1
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography variant="body1" color="primary.main" sx={{ fontWeight: 600, mb: 1, fontSize: { xs: '1rem', md: '1.1rem' } }}>
                    {product.price} ₽
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontSize: { xs: '0.95rem', md: '1rem' } }}>
                    {product.description}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    startIcon={<ShoppingCart />}
                    onClick={() => handleAddToCart(product)}
                    sx={{ mt: 1, fontWeight: 600, fontSize: { xs: '1rem', md: '1.1rem' }, py: { xs: 1, md: 1.2 }, borderRadius: 3 }}
                  >
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Fade>
        ))}
      </Grid>
    </Container>
  );
};

export default Products; 