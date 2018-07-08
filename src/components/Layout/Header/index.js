import React from "react";
import PropTypes from "prop-types";

Header.propTypes = {
	/** The organization who's facilities are being monitored */
	organizationName: PropTypes.string.isRequired
};

/**
 * The Header Component
 * 
 * @class Header
 */
function Header({organizationName}) {
	return (
		<nav>
			{organizationName}
		</nav>
	);
}

export default Header;