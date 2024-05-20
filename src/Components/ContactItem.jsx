import React from "react";
import styles from "../Styles/ContactItem.module.css";

const ContactItem = ({ Component, name, destination }) => {
  return (
    <div className={styles.container}>
      <Component className={styles.icon} />
      <a href={destination} className={styles.iconLink} title={name}>
        <p className={styles.name}>{name}</p>
      </a>
    </div>
  );
};

export default ContactItem;
