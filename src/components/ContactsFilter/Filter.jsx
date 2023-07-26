import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/contacts/filterSlice';
import { selectFilter } from 'redux/contacts/selectors';
import ContactsIcon from '@mui/icons-material/Contacts';
import {
  Avatar,
  Box,
  Container,
  CssBaseline,
  TextField,
  Typography,
  createTheme,
} from '@mui/material';
import { ThemeProvider } from 'styled-components';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const onChange = e => dispatch(filterContact(e.target.value));

  const defaultTheme = createTheme();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="div" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            paddingTop: 2,
            paddingBottom: 2,
            paddingLeft: 4,
            paddingRight: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <ContactsIcon />
          </Avatar>
          <Typography
            component="h1"
            variant="h4"
            sx={{
              marginBottom: 2,
            }}
          >
            My contacts
          </Typography>
          <TextField
            margin="normal"
            fullWidth
            id="text"
            label="Search contacts"
            type="text"
            name="filter"
            value={filter}
            onChange={onChange}
            autoFocus
          />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Filter;
