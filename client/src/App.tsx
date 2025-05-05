import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { ThemeProvider } from './context/ThemeContext';
import CssBaseline from '@mui/material/CssBaseline';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import Cart from './pages/Cart';
import UserProfile from './pages/UserProfile';
import Settings from './pages/Settings';
import ChatBot from './components/ChatBot';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <CartProvider>
        <Router>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <Box component="main" sx={{ flexGrow: 1, pt: 8 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/services" element={<Services />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/settings/*" element={<Settings />} />
              </Routes>
            </Box>
            <ChatBot />
          </Box>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
