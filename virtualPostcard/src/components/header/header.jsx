import React from "react";
import Login from "../login/login";
import styles from "./header.module.css";

const Header = ({ authService }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <i className="fas fa-quidditch"></i>
        {/* install font awesome */}
        <h1>virtual postcard</h1>
      </div>

      <div className={styles.login}>
        <Login authService={authService} />
      </div>

      <button className={styles.logoutBtn}>logout</button>
    </header>
  );
};

export default Header;
