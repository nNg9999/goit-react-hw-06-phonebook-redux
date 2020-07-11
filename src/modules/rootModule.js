import contactsReducer from './contacts/contactsReducer';
import themeReducer from './theme/themeReducer';

const rootModule = {
  contacts: contactsReducer,
  theme: themeReducer,
};

export default rootModule;