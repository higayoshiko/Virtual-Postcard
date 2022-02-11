import React from "react";

import styles from "./header.module.css";
import PropTypes from "prop-types";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <i className="fas fa-quidditch"></i>
      </div>
      <div className={styles.title}>
        <h1>virtual postcard</h1>
      </div>
    </header>
  );
};

Header.propTypes = {
  authService: PropTypes.object,
};
export default Header;
