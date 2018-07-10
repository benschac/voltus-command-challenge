import React from "react";
import PropTypes from "prop-types";

import classNames from  "./index.css";

PlaceHolder.propTypes = {
  /** The content for the placeholder */
  content: PropTypes.string.isRequired,
  /** the classnames passed down from props */
  classnames: PropTypes.string
}

PlaceHolder.defaultProps = {
  classnames: ''
}

/**
 * The PlaceHolder Component
 * 
 * @class PlaceHolder
 */
function PlaceHolder({content, classnames}) {
  return (
    <div className={`${classnames} ${classNames["placeholder-content"]}`}>
      <h1 className={`h3`}>{content}</h1>
    </div>
  )
}

export default PlaceHolder;