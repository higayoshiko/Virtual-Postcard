import React, { useState } from "react";
import styles from "./grid.module.css";
import Mail from "../mail/Mail";
import ImgApi from "../imgApi/imgApi";
import PropTypes from "prop-types";

const Grid = ({ FileInput }) => {
  const [image, setImage] = useState("");
  const [open, setOpen] = useState(false);

  const onClickImg = (event) => {
    setImage(event.target.src);
  };
  const onImgReset = () => {
    setImage("");
  };

  const onClickOpen = (event) => {
    setOpen((prevStatus) => (prevStatus ? false : true));
  };

  return (
    <section className={styles.container}>
      {/* email */}
      <div className={styles.inputWrapper}>
        <Mail
          FileInput={FileInput}
          onClickOpen={onClickOpen}
          sendtoMail={image}
        />
      </div>

      {/* search */}
      {open ? (
        <div className={styles.searchWrapper}>
          <div className={styles.img}>
            <ImgApi onClickImg={onClickImg} onImgReset={onImgReset} />
          </div>
        </div>
      ) : null}
    </section>
  );
};
Grid.propTypes = {
  FileInput: PropTypes.func,
};

export default Grid;
