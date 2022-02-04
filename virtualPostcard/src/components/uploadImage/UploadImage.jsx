// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import styles from './UploadImage.module.css';
//
// function UploadImages(props) {
// const [uploaded, upload] = useState("");
//
// function handleImage(e) {
//   const file = new FileReader();
//
//   file.onload = () => {
//     if (file.readyState === 2) {
//     upload(file.result);
//   }}
//   file.readAsDataURL(e.target.files[0]);
// }
//   props.callUpload(uploaded)
//
// return(
//   < div className={styles.uploadCtn} >
//   < input type="file" name="imageUpload"
//     accept="images/*" id="input" onChange={ handleImage }
//     className={styles.input} />
//   < div className={styles.label} >
//   < label htmlFor="input"></label >
//   </ div >
//   </ div >
// )}
//
// UploadImages.propTypes = {
//   callUpload: PropTypes.func
// }
//
// export default UploadImages;
