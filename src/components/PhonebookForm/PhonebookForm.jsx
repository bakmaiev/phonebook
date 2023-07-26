import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { Notify } from 'notiflix';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {
  Avatar,
  Box,
  Button,
  Container,
  CssBaseline,
  FormHelperText,
  TextField,
  Typography,
  createTheme,
} from '@mui/material';
import { ThemeProvider } from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup
  .object({
    name: yup
      .string()
      .matches(/^[a-zA-Zа-яА-ЯіїІЇґєҐЄ]+([' -][a-zA-Zа-яА-ЯіїІЇґєҐЄ]+)*$/)
      .required('Blabla'),
    number: yup.number().positive().integer().required(),
  })
  .required();

const PhonebookForm = ({ title }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const defaultTheme = createTheme();

  const onSubmit = data => {
    const { name, number } = data;
    const normalizedContact = name.toLowerCase().trim();
    const normalizedNumber = number.toString();

    if (
      contacts.some(el => el.name.toLowerCase().trim() === normalizedContact)
    ) {
      Notify.warning(
        `The contact name ${normalizedContact} is already exists!`
      );
      return;
    }

    if (contacts.some(el => el.number === normalizedNumber)) {
      Notify.warning(
        `The contact number ${normalizedNumber} is already exists!`
      );
      return;
    }

    dispatch(addContact(data));

    reset();
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="div" maxWidth="sm">
        <CssBaseline />
        <Box
          sx={{
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <PersonAddIcon />
          </Avatar>
          <Typography component="h1" variant="h4">
            Create a new contact
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ padding: 2 }}
          >
            <TextField
              {...register('name')}
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              type="name"
              autoComplete="name"
              autoFocus
            />
            {errors.name && (
              <FormHelperText id="component-error-text">
                Enter in English or Ukrainian
              </FormHelperText>
            )}
            <TextField
              {...register('number')}
              margin="normal"
              required
              fullWidth
              id="number"
              label="Number"
              type="number"
              autoComplete="number"
            />
            {errors.number && (
              <FormHelperText id="component-error-text">
                Enter only numbers
              </FormHelperText>
            )}
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
              Add contacts
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

PhonebookForm.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PhonebookForm;
