import React, { useState } from "react";
import styles from "./Grid.module.css";
import DisplayImage from "../displayImage/DisplayImage";
import Mail from "../Mail/Mail";
import ImgApi from "../imgApi/imgApi";

const Grid = (props) => {
  const [image, setImage] = useState("");
  const [open, setOpen] = useState(false);
  const onClickImg = (event) => {
    setImage(event.target.src);
  };
  const onClickOpen = (event) => {
    setOpen((prevStatus) => (prevStatus ? false : true));
  };

  return (
    <section className={styles.container}>
      <div className={styles.top}>
        {/* image */}
        <div onClick={onClickOpen} className={styles.displayImg}>
          <DisplayImage imageTarget={image} />
        </div>

        {/* email */}
        <div className={styles.email}>
          <Mail sendtoMail={image} />
        </div>
      </div>

      {/* search */}
      {open ? (
        <div className={styles.bottom}>
          <div className={styles.img}>
            <ImgApi onClickImg={onClickImg} />
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Grid;
