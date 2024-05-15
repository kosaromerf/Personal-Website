import React from "react";
import NavButton from "./NavButton";
import styles from "../Styles/Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.btnContainer}>
      <NavButton to="/" content="Home" />
      <NavButton to="/about" content="About" />
      <NavButton to="/skills" content="Skills" />
      <NavButton to="/work" content="Work" />
      <NavButton to="/contact" content="Contact" />
    </nav>
  );
};

export default Navigation;