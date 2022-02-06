import React, { useState } from "react";
import styles from "./Grid.module.css";
import DisplayImage from "../displayImage/DisplayImage";
import Mail from "../makeMail/Mail";
import ImgApi from "../imgApi/imgApi";

const Grid = (props) => {
  const [image, setImage] = useState("");

  const onClickImg = (event) => {
    setImage(event.target.src);
  };

  return (
    <section className={styles.container}>
      <div className={styles.top}>
        <div className={styles.displayImg}>
          <DisplayImage imageTarget={image} />
        </div>
        <div className={styles.email}>
          <Mail sendtoMail={image} />
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.img}>
          <ImgApi onClickImg={onClickImg} />
        </div>
      </div>
    </section>
  );
};

export default Grid;
