import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContacts = createAction('contacts/add', (name, number) => ({
  payload: {
    contacts: {
      name,
      number,
      id: uuidv4(),
    },
  },
}));

const removeContact = createAction('contacts/remove');

const changeFilter = createAction('contacts/changeFilter');

export default {
  addContacts,
  removeContact,
  changeFilter,
}