//redux
import { connect } from "react-redux";

import ContactForm from "./ContactForm";

import contactsActions from "../../modules/contacts/contactsActions";
import contactsSelectors from "../../modules/contacts/contactsSelectors";


// const ContactFormContainer = (props) => {
//   return (
//     <ContactForm {...props} />
//   )
// }

const mapState = (state) => {
  const contacts = contactsSelectors.getItems(state);
  return { ...contacts }
}

const mapDispatchToProps = {
  onAddContact: contactsActions.addContacts,
}

export default connect(mapState, mapDispatchToProps)(ContactForm);

