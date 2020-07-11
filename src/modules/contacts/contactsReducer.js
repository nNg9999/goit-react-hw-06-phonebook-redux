import { combineReducers, createReducer } from '@reduxjs/toolkit';

import contactsActions from './contactsActions';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]

const addContacts = (state, action) => {
  return [...state, action.payload.contacts]
};

const removeContact = (state, action) => { return state.filter(({ id }) => id !== action.payload) };


const items = createReducer(initialContacts, {
  [contactsActions.addContacts]: addContacts,
  [contactsActions.removeContact]: removeContact,
})

const filter = createReducer('', {
  [contactsActions.changeFilter]: (state, action) => action.payload,
})

export default combineReducers({
  items,
  filter,
})



