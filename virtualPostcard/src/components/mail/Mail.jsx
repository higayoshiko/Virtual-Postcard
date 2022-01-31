import React, { useState } from 'react';
import Axios from 'axios';
import styles from './Mail.module.css';

function SendMail() {

const [email, setEmail] = useState("");


function handleChange(e) {
  setEmail(e.target.value);
  console.log(typeof email)
}

function sendNodemailer(e) {
  e.preventDefault();

try {Axios.post("http://localhost:8001/sendNodemailer", {
  email
});
}catch(error) {
  console.log(error.response.data);
}
}

return <form className={styles.mail_ctn} onSubmit = { handleChange }>
  <label className={styles.label}>Send to your friends: </label>
  <input className={styles.input} type="text" onChange = { handleChange }
  placeholder="Enter Email" value={email} />
  <button className={styles.button} type="submit" onClick={sendNodemailer}>Send</button>
  </form>

}

export default SendMail;
