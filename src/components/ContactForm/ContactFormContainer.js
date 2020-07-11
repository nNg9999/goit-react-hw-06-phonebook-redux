//redux
import { connect } from "react-redux";

import ContactForm from "./ContactForm";

import contactsActions from "../../modules/contacts/contactsActions";
import contactsSelectors from "../../modules/contacts/contactsSelectors";


const mapStateToProps = (state) => {
  const contacts = contactsSelectors.getItems(state);
  return { ...contacts }
}

const mapDispatchToProps = {
  onAddContact: contactsActions.addContacts,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

