import React from "react";
import PropTypes from "prop-types";
import styles from "./DisplayImage.module.css";

const DEFAULT_IMAGE = "/images/post.jpeg";

const DisplayImage = ({ imageTarget }) => {
  const url = imageTarget || DEFAULT_IMAGE;

  return (
    <div className={styles.displayCtn}>
      <div className={styles.cardCtn}>
        <img src={url} className={styles.img} alt="" />
      </div>
    </div>
  );
};

DisplayImage.propTypes = {
  imageTarget: PropTypes.string,
};

export default DisplayImage;
