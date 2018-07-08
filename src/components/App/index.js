import React from "react";
import {connect} from "react-redux";
import {getFacility} from "../../actions";
/**
 * The Main App Component
 * 
 * @class App
 */
class App extends React.Component {  
	/** @inheritDoc */
	render() {
		return (
			<button onClick={this.props.getFacility}>Click me!</button>
		);
	}
}

/** @inheritDoc */
const mapStateToProps = (state, ownProps) => ({
	facility: state.facility,
	// Todo -- get this from react-router
	queryParam: ownProps
});

/** @inheritDoc */
const mapDispatchToProps = (dispatch) => ({
	getFacility: (id) => dispatch(getFacility("1"))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);