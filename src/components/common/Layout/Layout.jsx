import React from "react";
import PropTypes from "prop-types";

// context
// import withThemeContext from '../../hoc/withThemeContext';
import { connect } from "react-redux";
// styles
import styles from "./Layout.module.scss";

function Layout(props) {
  const { children, isChecked } = props;

  return (
    <div
      className={`${styles.container} ${
        isChecked.isChecked ? styles.dark : styles.light
        }`}
    >
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  isChecked: PropTypes.object.isRequired

};

const mapStateToProps = state => {
  return {
    isChecked: state.theme.isChecked,
    theme: state.theme.themeConfig,
  };
};

export default connect(mapStateToProps)(Layout);