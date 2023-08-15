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
      <List sx={{ padding: 2 }}>
        {Array.isArray(visibleContacts) &&
          visibleContacts.map(contact => {
            return (
              <ListItem
                key={contact._id}
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => dispatch(deleteContact(contact._id))}
                    sx={{
                      m: 1,
                      bgcolor: 'primary.main',
                    }}
                  >
                    <DeleteIcon sx={{ color: 'white' }} />
                  </IconButton>
                }
                sx={{ flexWrap: true, gap: 3 }}
              >
                <ListItemAvatar>
                  <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText sx={{ flexBasis: 40 }}>
                  {contact.name}
                </ListItemText>
                <ListItemText sx={{ flexBasis: 40 }}>
                  {contact.number}
                </ListItemText>
              </ListItem>
            );
          })}
      </List>
    </Container>
  );
};

export default ContactsList;
