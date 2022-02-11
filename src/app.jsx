import React from "react";
import Grid from "./components/grid/Grid";
import Header from "./components/header/header";

// import styles from "./app.module.css";
import PropTypes from "prop-types";

function App({ FileInput }) {
  return (
    <div>
      <Header />
      <Grid FileInput={FileInput} />
    </div>
  );
}
App.propTypes = {
  FileInput: PropTypes.func,
};

export default App;
