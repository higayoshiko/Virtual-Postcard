import React from 'react';
import PropTypes from 'prop-types';
import Mail from "../mail/Mail";

function DisplayImage(props) {

  return < div >
    < img src = { props.imageTarget } alt = ""
    onError={(event) => event.target.style.display = 'none'} / >
    < Mail />
    < /div >
}

DisplayImage.propTypes = {
  imageTarget: PropTypes.string
}

export default DisplayImage;
