import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {

  return <div >
    < img src = { props.imageTarget } alt = "yep" / >
    < /div>
}

Card.propTypes = {
  imageTarget: PropTypes.string
}

export default Card;
