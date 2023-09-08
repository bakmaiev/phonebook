import React from 'react';
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';

import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import {
  Avatar,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const getVisibleContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const visibleContacts = getVisibleContacts();

  return (
    <Container component="div" maxWidth="sm">
      <List
        sx={{
          paddingTop: 2,
          paddingBottom: 2,
          paddingLeft: 4,
          paddingRight: 4,
        }}
      >
        {Array.isArray(visibleContacts) &&
          visibleContacts.map(contact => {
            return (
              <ListItem
                key={contact._id}
                sx={{
                  flexWrap: true,
                  gap: 4,
                  border: `1px solid`,
                  borderColor: 'primary.main',
                  borderRadius: '5px',
                  mb: 1,
                  '@media (max-width: 425px)': {
                    flexDirection: 'column',
                    gap: 0,
                  },
                }}
              >
                <ListItemAvatar>
                  <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  sx={{ flexBasis: 'auto', overflowWrap: 'break-word' }}
                >
                  {contact.name}
                </ListItemText>
                <ListItemText
                  sx={{ flexBasis: 'auto', overflowWrap: 'break-word' }}
                >
                  {contact.number}
                </ListItemText>
                <ListItemIcon>
                  <IconButton
                    aria-label="delete"
                    onClick={() => dispatch(deleteContact(contact._id))}
                    sx={{
                      m: 1,
                      bgcolor: 'primary.main',
                    }}
                  >
                    <DeleteIcon sx={{ color: 'white' }} />
                  </IconButton>
                </ListItemIcon>
              </ListItem>
            );
          })}
      </List>
    </Container>
  );
};

export default ContactsList;
