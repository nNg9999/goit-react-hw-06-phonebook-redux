// redux
import { connect } from "react-redux";

import ContactListItem from "./ContactListItem";

// import contactsActions from "../../redux/contacts/contactsActions";
import contactsActions from "../../modules/contacts/contactsActions";
import contactsSelectors from "../../modules/contacts/contactsSelectors";


const mapState = (state, ownProps) => {
  const contacts = contactsSelectors.getItemById(state, ownProps.id);
  return { ...contacts }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onRemove: () => dispatch(contactsActions.removeContact(ownProps.id)),
})

export default connect(mapState, mapDispatchToProps)(ContactListItem);
