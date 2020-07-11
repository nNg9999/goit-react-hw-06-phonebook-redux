import React, { Component } from 'react'

import { connect } from "react-redux";
import contactsSelectors from "../modules/contacts/contactsSelectors";

import App from "./App";

class AppContainer extends Component {

  render() {
    return (
      <App {...this.props} {...this.state} >
        {this.props.children}
      </App>
    )
  }
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getItems(state),
  visibleContacts: contactsSelectors.getVC(state),
})

export default connect(mapStateToProps)(AppContainer);



