import React from "react";

import styles from "./header.module.css";
import PropTypes from "prop-types";

const Header = () => {
  return (
    <header>
      <div className={styles.headerContainer}>
        <span className={styles.logo}>
          <i className="fas fa-quidditch"></i>
        </span>
        <div className={styles.title}>
          <h1>Virtual Postcard</h1>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  authService: PropTypes.object,
};
export default Header;
