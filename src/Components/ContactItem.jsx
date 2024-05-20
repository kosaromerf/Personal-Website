import React from "react";
import styles from "../Styles/ContactItem.module.css";

const ContactItem = ({ Component, name, destination }) => {
  return (
    <div className={styles.container}>
      <a href={destination} className={styles.iconLink} title={name}>
        <Component className={styles.icon} />
      </a>
      <p className={styles.name}>{name}</p>
    </div>
  );
};

export default ContactItem;
