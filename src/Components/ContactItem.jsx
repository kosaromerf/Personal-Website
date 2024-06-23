import React from "react";
import styles from "../Styles/ContactItem.module.css";
import { MdOutlineContentCopy } from "react-icons/md";
import addClipboard from "../Utils/addClipboard";
import PropTypes from "prop-types";

const ContactItem = ({ Component, name, destination }) => {
  return (
    <div className={styles.container}>
      <Component
        className={styles.icon}
        target="_blank"
        aria-label={
          name != "E-Mail" ? `Go to ${name} profile` : `Go to send E-mail`
        }
      />
      {name == "E-Mail" && (
        <button
          id="clipBoard"
          className={styles.clipBoard}
          aria-label="copyMail"
        >
          <MdOutlineContentCopy
            className={styles.copyIcon}
            onClick={addClipboard}
          />
        </button>
      )}
      <a href={destination} className={styles.iconLink} title={name}>
        <p className={styles.name}>{name}</p>
      </a>
    </div>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  Component: PropTypes.elementType.isRequired,
};

export default ContactItem;
