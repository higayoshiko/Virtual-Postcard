import React from "react";
import Login from "../login/login";
import styles from "./header.module.css";

const Header = ({ onLogOut, authService }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <i className="fas fa-quidditch"></i>
      </div>
      <div className={styles.title}>
        <h1>virtual postcard</h1>
      </div>
      {!onLogOut && (
        <div className={styles.login}>
          <Login authService={authService} />
        </div>
      )}
      {onLogOut && (
        <button onClick={onLogOut} className={styles.logoutBtn}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
