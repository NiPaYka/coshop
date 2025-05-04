import React from 'react';
import { Container, Typography, Box, TextField, Button, Link, Paper } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Login = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <Container maxWidth="sm" sx={{ py: { xs: 4, md: 8 }, px: { xs: 1, sm: 2 } }}>
      <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 } }}>
        <Typography variant="h4" component="h1" gutterBottom align="center" sx={{ fontSize: { xs: '1.5rem', md: '2rem' } }}>
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, fontSize: { xs: '1rem', md: '1.1rem' }, py: { xs: 1.2, md: 2 } }}
          >
            Sign In
          </Button>
          <Box sx={{ textAlign: 'center' }}>
            <Link component={RouterLink} to="/register" variant="body2" sx={{ fontSize: { xs: '0.95rem', md: '1rem' } }}>
              {"Don't have an account? Sign Up"}
            </Link>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login; 