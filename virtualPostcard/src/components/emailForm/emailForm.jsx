import React, { useRef } from "react";
import styles from "./emailForm.module.css";

const EmailForm = (props) => {
  const formRef = useRef();
  const nameRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  return (
    <form ref={formRef} className={styles.form}>
      {/* <h3>email form</h3> */}
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        placeholder="Name"
      ></input>
      <input
        ref={titleRef}
        className={styles.input}
        type="text"
        name="title"
        placeholder="Title"
      ></input>
      <input
        ref={emailRef}
        className={styles.input}
        type="text"
        name="email"
        placeholder="E-mail"
      ></input>
      {/* <img className={styles.img} alt="postcard"></img> */}
      {/* <iframe
        src="https://giphy.com/embed/QhjR3MG9ZFfjB6BtIZ"
        width="400"
        height="400"
        frameBorder="0"
        allowFullScreen
      /> */}
      <textarea
        ref={messageRef}
        className={styles.msg}
        name="message"
        placeholder="Message"
      ></textarea>
      <section className={styles.btns}>
        <button className={styles.sendBtn}>send</button>
        <button className={styles.imgBtn}>image</button>
      </section>
    </form>
  );
};

export default EmailForm;
