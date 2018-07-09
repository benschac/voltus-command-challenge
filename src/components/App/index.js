import React from "react";
import {connect} from "react-redux";
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"
import {partial} from "lodash";
import queryString from "query-string";
import PropTypes from 'prop-types';
import {compose, withProps} from "recompose";
import {toTitleCase} from "../../utils";
import Table from "../Table";
import Header from "../Layout/Header";
import {getOrganization} from "../../actions";

const columns = ["name", "reading", "last_update"];
const columnMeta = {name: "Facility", reading: "Reading", last_update: "Last Update"}
/**
 * 
 * @param {string} type the value to format on 
 * @param {string} value to transform
 * 
 * @return {string} formatted value
 */
const rowValueFormatter = (type, value) => {
	// Note: In a production (or more real world) we could break this up into an object
	// So that we could get an O(1) lookup rather than this O(n)
	// I think this is a bit more readable so I went the switch route. :D
	switch (type) {
		case "facility":
			return toTitleCase(value)
		case "reading":
			console.log({value});
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


const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `300px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)(({facilities}) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: facilities[0].coord[0], lng: facilities[0].coord[1]}}
	>
	{
		facilities.map((facility) => <Marker position={{ lat: facility.coord[0], lng: facility.coord[1]}} />)
	}
  </GoogleMap>
)


/**
 * The Main App Component
 * 
 * @class App
 */
class App extends React.Component {
	static propTypes = {
		/** The organization who's facities are being rendered */
		organization: PropTypes.string.isRequired,
		/** Query parameters coming from the URL */
		queryParams: PropTypes.object.isRequired
	}

	state = {
		organization: null
	};

	/** HACK -- TODO REMOVE */
	/** @inheritDoc */
	componentWillMount() {
		this.props.getOrganization(this.props.queryParams.organization)
	}

	/** @inheritDoc */
	render() {
		const {organization, facilities} = this.props;
		return (
			<div>
				<Header organizationName={organization} />
				<MyMapComponent
					isMarkerShown
					googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
					loadingElement={<div style={{ height: `100%` }} />}
					containerElement={<div style={{ height: `400px` }} />}
					mapElement={<div style={{ height: `100%` }} />}
					facilities={facilities}
				/>
				<Table
					columns={columns}
					rows={facilities}
					columnMeta={columnMeta}
					rowValueFormatter={rowValueFormatter}
				/>
				<button onClick={partial(this.props.getOrganization, "1")}>Click me!</button>
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