import React, { useState } from "react";
import Axios from "axios";
import PropTypes from "prop-types";
import styles from "./Mail.module.css";
import DisplayImage from "../displayImage/DisplayImage";

const SendMail = ({ sendtoMail, FileInput, onClickOpen }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState({ fileURL: null });

  const data = {
    currentEmail: email,
    currentName: name,
    currentMessage: message,
    currentImage: file.fileURL || sendtoMail,
  };

  // call backend api
  function sendNodemailer(e) {
    e.preventDefault();
    try {
      Axios.post("/sendNodemailer", data);
    } catch (error) {
      console.log(error.response.data);
    }
    alert("Your postcard has been sent!");
  }
  const onReset = () => {
    setFile({
      fileURL: "",
    });
  };
  const onFileChange = (file) => {
    console.log(file);
    setFile({
      fileURL: file.url,
    });
  };

  return (
    <form className={styles.form} onSubmit={(e) => setEmail(e.target.value)}>
      <div className={styles.resetimg} onClick={onReset}>
        <div className={styles.displayImg} onClick={onClickOpen}>
          <DisplayImage imageTarget={data.currentImage} />
        </div>
      </div>
      <div className={styles.email}>
        <input
          className={styles.input}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          value={email}
          required
        />
        <input
          className={styles.input}
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          value={name}
          required
        />
        <textarea
          className={styles.msg}
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          value={message}
          rows="5"
          cols="30"
          required
        />
        <div className={styles.btns}>
          <FileInput onFileChange={onFileChange} />
          <button
            className={styles.searchBtn}
            type="button"
            onClick={onClickOpen}
          >
            Search Online
          </button>
        </div>
        <button
          className={styles.sendBtn}
          type="submit"
          onClick={sendNodemailer}
        >
          Send
        </button>
      </div>
    </form>
  );
};

SendMail.propTypes = {
  sendtoMail: PropTypes.string,
  onClickOpen: PropTypes.func,
  FileInput: PropTypes.func,
  imageTarget: PropTypes.string,
};

export default SendMail;
