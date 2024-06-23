import React from "react";
import styles from "../Styles/Modal.module.css";
import { useState } from "react";
import PropTypes from "prop-types";

const Modal = ({ images, name, content, isOpen, closeModal }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const changeImageInc = () => {
    if (imageIndex + 1 === images.length) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };

  const changeImageDec = () => {
    if (imageIndex === 0) {
      setImageIndex(images.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  };

  const changeImage = (index) => {
    setImageIndex(index);
  };

  const slideImages = images.map((e, index) => (
    <img
      src={e}
      key={index}
      className={styles.slides}
      style={{ width: `${100 / images.length}%` }}
      onClick={() => changeImage(index)}
    />
  ));

  return (
    <div
      className={styles.modal}
      style={{
        display: `${isOpen ? "flex" : "none"}`,
      }}
    >
      <div className={styles.container}>
        <div className={styles.displayImageContainer}>
          <a onClick={changeImageInc} className={styles.incBtn}>
            ❯
          </a>
          <img
            src={images[imageIndex]}
            alt="descripton"
            className={styles.displayImage}
          />
          <a onClick={changeImageDec} className={styles.decBtn}>
            ❮
          </a>
        </div>
        <div className={styles.slideContainer}>{slideImages}</div>
        <h4 className={styles.modalName}>{name}</h4>
        <p className={styles.modalContent}>{content}</p>
      </div>
      <button className={styles.closeBtn} onClick={closeModal}>
        X
      </button>
    </div>
  );
};

Modal.propTypes = {
  images: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
