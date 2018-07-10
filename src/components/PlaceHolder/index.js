import React from "react";
import PropTypes from "prop-types";

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
    <div className={classnames}>
      {content}
    </div>
  )
}

export default PlaceHolder;