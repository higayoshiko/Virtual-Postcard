import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import ImgUploader from "./service/image_uploader";
import ImgFile from "./components/imgFile/imgFile";
import "@fortawesome/fontawesome-free/js/all.js";
import "./index.css";

const imageUploader = new ImgUploader();
const FileInput = (props) => (
  <ImgFile {...props} imageUploader={imageUploader} />
);

console.log(process.env.REACT_APP_CLIENT_ID)

ReactDOM.render(
  <React.StrictMode>
    <App FileInput={FileInput} />
  </React.StrictMode>,
  document.getElementById("root")
);
