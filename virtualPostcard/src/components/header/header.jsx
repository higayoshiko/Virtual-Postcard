import React from "react";

import styles from "./header.module.css";

const Header = ({ onLogOut }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <i className="fas fa-quidditch"></i>
        {/* install font awesome */}
        <h1>virtual postcard</h1>
      </div>
      <div className={styles.login}></div>
      {onLogOut && (
        <button onClick={onLogOut} className={styles.logoutBtn}>
          Logout
        </button>
      )}
    </header>
  );
};

export default Header;
