import React from "react";
import {connect} from "react-redux";
import {partial} from "lodash";
import {getOrganization} from "../../actions";
/**
 * The Main App Component
 * 
 * @class App
 */
class App extends React.Component {  

	constructor() {
		super();
		const {getOrganization} = this.props;
		state = {
			organization: null
		};

		if (this.props.location.param) {
			getOrganization("1");
		}
	}

	/** @inheritDoc */
	render() {
		return (
			<button onClick={partial(this.props.getOrganization, "2")}>Click me!</button>
		);
	}
}

/** @inheritDoc */
const mapStateToProps = (state, ownProps="1") => ({
	facility: state.facility,
	// Todo -- get this from react-router
	queryParam: ownProps
});

/** @inheritDoc */
const mapDispatchToProps = (dispatch, ownProps) => ({
	getOrganization: (id) => dispatch(getOrganization(id || ownProps))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);