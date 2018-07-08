import React from "react";
import {connect} from "react-redux";
import {partial} from "lodash";
import queryString from "query-string";
import Header from '../Layout/Header';
import {getOrganization} from "../../actions";
/**
 * The Main App Component
 * 
 * @class App
 */
class App extends React.Component {  
	state = {
		organization: null
	};

	/** @inheritDoc */
	render() {
		const {organization} = this.props;
		return (
			<div>
				<Header organizationName={organization} />
				<button onClick={partial(this.props.getOrganization, "1")}>Click me!</button>
			</div>
		);
	}
}

/** @inheritDoc */
const mapStateToProps = (state) => {
	return {
	organization: state.organization.name,
	queryParams: queryString.parse(state.router.location.search)
}};

/** @inheritDoc */
const mapDispatchToProps = (dispatch, ownProps) => ({
	getOrganization: (id) => dispatch(getOrganization(id || ownProps))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);