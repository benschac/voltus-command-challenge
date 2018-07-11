import React from "react";
import PropTypes from "prop-types";

import classNames from  "./index.css";

PlaceHolder.propTypes = {
  /** The content for the placeholder */
  content: PropTypes.string.isRequired,
  /** the classnames passed down from props */
  classnames: PropTypes.string,
  /** the height of the placeholder component */
  height: PropTypes.string.isRequired
};

PlaceHolder.defaultProps = {
  classnames: "",
  height: "25%"
};

/**
 * The PlaceHolder Component
 * 
 * @class PlaceHolder
 */
function PlaceHolder({content, classnames, height}) {
  return (
    <div style={{height}} className={`${classnames} ${classNames["placeholder-content"]}`}>
      <h1 className={"h3"}>{content}</h1>
    </div>
  );
}

export default PlaceHolder;