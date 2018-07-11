import React from "react";
import {connect} from "react-redux";
import queryString from "query-string";
import PropTypes from 'prop-types';
import {toTitleCase} from "../../utils";
import MapComponent from "../MapComponent";
import Table from "../Table";
import Header from "../Layout/Header";
import PlaceHolder from "../PlaceHolder";
import {getOrganization} from "../../actions";

import classNames from './index.css';

const columns = ["name", "reading", "last_update"];
const columnMeta = {name: "Facility", reading: "Reading", last_update: "Last Update"}
/**
 * 
 * @param {string} type the value to format on 
 * @param {string} row to transform
 * 
 * @return {string} formatted row
 */
const rowFormatter = (type, row) => {
	// Note: In a production (or more real world) we could break this up into an object
	// So that we could get an O(1) lookup rather than this O(n)
	// I think this is a bit more readable so I went the switch route. :D
	const value = row[type];
	switch (type) {
		case "facility":
			return toTitleCase(value)
		case "reading":
			return `${value ? `${value}kW` : '0kW'}`;
		case "last_update":
			const d = new Date(Date.now());
			// This format isn't in the comp, but I think it gives the end user a bit
			// more actionable information
			return `${d.toDateString()}`;
		default:
			return `${value}`
	}
}





/**
 * The Main App Component
 * 
 * @class App
 */
class App extends React.Component {
	static propTypes = {
		/** The organization who's facilities are being rendered */
		organization: PropTypes.string.isRequired,
		/** Query parameters coming from the URL */
		queryParams: PropTypes.object.isRequired
	}

	static defaultProps = {
		organization: 'Not Found'
	}

	/** HACK -- TODO REMOVE */
	/** @inheritDoc */
	componentWillMount() {
		this.props.getOrganization(this.props.queryParams.organization)
	}

	/** @inheritDoc */
	render() {
		const {organization, facilities} = this.props;
		return (
			<div className={classNames["command-center"]}>
			<Header 
				classnames={classNames["header"]}
				organizationName={organization} 
			/>
				<aside>
					<PlaceHolder 
						classnames={classNames["placeholder"]} 
						content="[PlaceHolder]"
						height="50%"
					/> 
					<Table
						columns={columns}
						rows={facilities}
						columnMeta={columnMeta}
						classnames={classNames["table"]}
						rowFormatter={rowFormatter}
					/>
				</aside>
				<section className={classNames["main"]}>
					<MapComponent
						isMarkerShown
						googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
						loadingElement={<div style={{ height: `100%` }} />}
						containerElement={<div style={{ height: `100%` }} />}
						mapElement={<div style={{ height: `100%` }} />}
						facilities={facilities}
					/>
				</section>
			</div>
		);
	}
}

/** @inheritDoc */
const mapStateToProps = (state) => ({
	organization: state.organization.name,
	facilities: state.organization.facilities,
	queryParams: queryString.parse(state.router.location.search)
});

/** @inheritDoc */
const mapDispatchToProps = (dispatch, ownProps) => ({
	getOrganization: (id) => dispatch(getOrganization(id || ownProps.queryParams))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);