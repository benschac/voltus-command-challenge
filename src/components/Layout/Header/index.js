import React from "react";
import PropTypes from "prop-types";

Header.propTypes = {
	/** The organization who's facilities are being monitored */
	organizationName: PropTypes.string.isRequired,
	/** The classnames from props */
	classnames: PropTypes.string
};

Header.defaultProps = {
	classnames: ''
}

/**
 * The Header Component
 * 
 * @class Header
 */
function Header({organizationName, classnames}) {
	return (
		<nav className={`${classnames}`}>
			<h1 className={`h3 ml1 darkSlate`}>{organizationName}</h1>
		</nav>
	);
}

export default Header;