import React from "react";
import { useNavigate } from "react-router";
import styles from "./login.module.css";

const Login = ({ authService }) => {
  const navigate = useNavigate();
  const goToSave = (userId) => {
    navigate("/saved", { state: { id: userId } });
  };

  const onLogin = (event) => {
    authService //
      .login(event.currentTarget.textContent) // provider name
      .then((data) => goToSave(data.user.uid));
  };

  return (
    <section className={styles.login}>
      <ul className={styles.ul}>
        <li className={styles.li}>login</li>
        <li className={styles.li}>
          <button onClick={onLogin}>Google</button>
        </li>
        <li className={styles.li}>
          <button onClick={onLogin}>Github</button>
        </li>
      </ul>
    </section>
  );
};

export default Login;
