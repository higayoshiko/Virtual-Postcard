import React from 'react';
import PropTypes from 'prop-types';
import Mail from "../mail/Mail";
import styles from "./DisplayImage.module.css";


function DisplayImage(props) {

  return (
  < div className={ styles.displayCtn } >
  < div className={ styles.cardCtn } >
  < img src = { props.imageTarget } className={ styles.img } alt = "" />
  </ div >
  < Mail sendtoMail={ props.imageTarget } />
  </ div >
)}

DisplayImage.propTypes = {
  imageTarget: PropTypes.string
}

export default DisplayImage;
