import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/NavButton.module.css";
import PropTypes from "prop-types";

const NavButton = ({ to, content }) => {
  return (
    <Link to={to} className={styles.navBtn}>
      {content}
    </Link>
  );
};

NavButton.propTypes = {
  to: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default NavButton;
