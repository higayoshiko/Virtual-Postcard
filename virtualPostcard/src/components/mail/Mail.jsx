import React, { useState } from 'react';
import Axios from 'axios';
import PropTypes from 'prop-types';
import styles from './Mail.module.css';


function SendMail(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const data = {
    currentEmail: email,
    currentName: name,
    currentMessage: message,
    currentImage: props.sendtoMail
  }

  // call backend mailer.js
  function sendNodemailer(e) {
    e.preventDefault();

  try { Axios.post("http://localhost:8001/sendNodemailer",
    data );
    }
  catch(error) {
    console.log(error.response.data);
    }
    alert("Your postcard has been sent!")
  }

return (
        < form className={styles.mail_ctn}
        onSubmit = { (e) => setEmail(e.target.value) } >
        < label className={styles.label} >Send to your friends:</ label >
        < input className={styles.input} type="text"
        onChange = { (e) => setEmail(e.target.value) }
        placeholder="Enter your friend's email" value={ email} required />
        < input className={styles.input} type="text"
        onChange={(e) => setName(e.target.value) }
        placeholder="Enter your friend's name" value={name} required />
        < textarea className={styles.message} type="text"
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Your message" value={message}
        rows="5" cols="30" required />
        < button className={styles.button} type="submit"
        onClick={ sendNodemailer }>Send</ button >
        </ form >)
}

SendMail.propTypes = {
  sendtoMail: PropTypes.string
}

export default SendMail;
