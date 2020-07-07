import { configureStore } from '@reduxjs/toolkit';
import rootModule from './rootModule';

// import timerReducer from './timer/timerReducer';
// import contactsReducer from './contacts/contactsReducer'


const store = configureStore({
  reducer: rootModule,
});

export default store;
