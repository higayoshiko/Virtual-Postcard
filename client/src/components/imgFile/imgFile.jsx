import React, { useRef } from "react";
import styles from "./imgFile.module.css";
import PropTypes from "prop-types";

const ImgFile = ({ imageUploader, onFileChange }) => {
  const inputRef = useRef();
  const onBtnClick = (event) => {
    inputRef.current.click();
    event.preventDefault();
  };
  const onChange = async (event) => {
    // console.log(event.target.files[0]);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    // console.log(uploaded);
    onFileChange({
      url: uploaded.url,
    });
  };
  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      ></input>

      <button className={styles.btn} onClick={onBtnClick}>
        image
      </button>
    </div>
  );
};

ImgFile.propTypes = {
  imageUploader: PropTypes.object,
  onFileChange: PropTypes.func,
};

export default ImgFile;
