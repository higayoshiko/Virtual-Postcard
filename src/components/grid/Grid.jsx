import React, { useState } from "react";
import styles from "./Grid.module.css";
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
      <div className={styles.top}>
        {/* email */}
        <div className={styles.email}>
          <Mail
            FileInput={FileInput}
            onClickOpen={onClickOpen}
            sendtoMail={image}
          />
        </div>
      </div>

      {/* search */}

      {open ? (
        <div className={styles.bottom}>
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
