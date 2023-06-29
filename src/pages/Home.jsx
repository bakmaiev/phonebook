import {
  Avatar,
  Box,
  CssBaseline,
  Grid,
  Paper,
  Typography,
  createTheme,
} from '@mui/material';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';

const Home = () => {
  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{ height: '100vh', justifyContent: 'center' }}
      >
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              'url(https://i.ibb.co/JBVQTrn/charlesdeluvio-Dilfan21-P8o-unsplash.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <CssBaseline />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginBottom: 10,
              marginTop: 8,
              padding: 2,
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <PhoneIphoneIcon />
            </Avatar>
            <Typography component="h1" variant="h3">
              Phonebook
            </Typography>
            <Typography
              component="p"
              variant="p"
              sx={{ pading: 10, textAlign: 'justify', marginTop: 2 }}
            >
              Phonebook is a contact management application that enables you to
              add and delete phone numbers. It provides a simple and efficient
              way to manage your contacts, allowing you to keep your address
              book organized. With Phonebook, you can easily add new contacts
              and remove unwanted ones, ensuring that your contact list stays up
              to date.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Home;
