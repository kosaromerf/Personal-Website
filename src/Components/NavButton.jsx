import React from "react";
import { Link } from "react-router-dom";
import styles from "../Styles/NavButton.module.css";

const NavButton = ({ to, content }) => {
  return (
    <Link to={to} className={styles.navBtn}>
      {content}
    </Link>
  );
};

export default NavButton;
