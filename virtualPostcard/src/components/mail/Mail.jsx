import React, { useState } from "react";
import Axios from "axios";
import PropTypes from "prop-types";
import styles from "./Mail.module.css";
import ImgFile from "../imgFile/imgFile";

const SendMail = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const data = {
    currentEmail: email,
    currentName: name,
    currentMessage: message,
    currentImage: props.sendtoMail,
  };

  // call backend mailer.js
  function sendNodemailer(e) {
    e.preventDefault();

    try {
      Axios.post("http://localhost:8001/sendNodemailer", data);
    } catch (error) {
      console.log(error.response.data);
    }
    alert("Your postcard has been sent!");
  }

  return (
    <form className={styles.form} onSubmit={(e) => setEmail(e.target.value)}>
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
        <button
          className={styles.sendBtn}
          type="submit"
          onClick={sendNodemailer}
        >
          Send
        </button>
        <ImgFile />
      </div>
    </form>
  );
};

SendMail.propTypes = {
  sendtoMail: PropTypes.string,
};

export default SendMail;
