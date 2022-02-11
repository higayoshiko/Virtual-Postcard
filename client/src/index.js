import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import ImgUploader from "./service/image_uploader";
import ImgFile from "./components/imgFile/imgFile";

const imageUploader = new ImgUploader();
const FileInput = (props) => (
  <ImgFile {...props} imageUploader={imageUploader} />
);

ReactDOM.render(
  <React.StrictMode>
    <App FileInput={FileInput} />
  </React.StrictMode>,
  document.getElementById("root")
);
