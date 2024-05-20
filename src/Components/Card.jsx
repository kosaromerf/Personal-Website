import React from "react";
import styles from "../Styles/Card.module.css";
import { useState } from "react";
import Modal from "./Modal";

const Card = ({ images, name, content, codeLink, liveLink }) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div className={styles.cardBody}>
      <img
        src={images[0]}
        alt="projectimages"
        className={styles.cardImg}
        onClick={openModal}
      />
      <div className={styles.content}>
        <h4 className={styles.cardName}>{name}</h4>
        <p className={styles.cardContent}>{content}</p>
      </div>
      <div className={styles.links}>
        <a href={codeLink} className={styles.codeLink}>
          GitHub
        </a>
        <a href={liveLink} className={styles.liveLink}>
          Live
        </a>
        <button className={styles.modalOpen} onClick={openModal}>
          Images
        </button>
      </div>
      <div>
        <Modal
          images={images}
          name={name}
          content={content}
          codeLink={"#"}
          liveLink={"#"}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      </div>
    </div>
  );
};

export default Card;
