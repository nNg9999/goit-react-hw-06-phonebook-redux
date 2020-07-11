// Core
import React from 'react';

// Components
import Layout from './common/Layout';
import Section from './common/Section';
import ContactForm from './ContactForm/ContactFormContainer';
import ContactList from './ContactList';
import Filter from './Filter';
import ThemeToggler from './ThemeToggler';


// utils
import { ToastContainer } from 'react-toastify';

//styles
import 'react-toastify/dist/ReactToastify.css';

const App = ({ contacts, visibleContacts, onIncrement, counterValue }) => {

  return (
    <Layout  >
      <ThemeToggler />
      <Section title={"Phonebook"}>
        <ContactForm />
      </Section>
      <Section title={"Contacts"}>
        {contacts.length > 1 && <Filter />}
        {contacts.length > 0 && < ContactList />}
        {!visibleContacts.length && <div>Not faund</div>}
      </Section>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Layout >
  );
}

export default App;

