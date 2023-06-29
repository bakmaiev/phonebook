import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Link,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const defaultTheme = createTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      loginUser({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  const handleLinkSignUp = e => {
    navigate('/register');
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          md={7}
          sx={{
            backgroundImage:
              'url(https://i.ibb.co/JBVQTrn/charlesdeluvio-Dilfan21-P8o-unsplash.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              marginBottom: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ mt: 1, padding: 2 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                type="email"
                name="email"
                autoComplete="email"
                autoFocus
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
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid item>
                <Link
                  to="/register"
                  onClick={handleLinkSignUp}
                  variant="body2"
                  sx={{ cursor: 'pointer' }}
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
