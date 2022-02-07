import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import reportWebVitals from "./reportWebVitals";
// import ImgFile from "./components/imgFile/imgFile";
// import ImgUploader from "./service/img_uploader";

// const imgUploader = new ImgUploader();
// const FileInput = (props) => <ImgFile {...props} imgUploader={imgUploader} />;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
