// Note: Using index for now, might break this down later if it gets too big.
// https://github.com/babel/babel/issues/5085 -- annoying, curious if there is a better way?
import "babel-polyfill";
import {get} from "axios";
import {GET_FACILITY} from "../actions/types";
const APIURL = "http://challenge.voltus.co/facilities/";

/**
 * Async action to get facilityId 
 * 
 * @param {string} id the facilityId
 */
export const getFacility = (id) => async dispatch => {
	let response;
	try {
		response = await get(`${APIURL}${id}`);
	} catch (err) {
		console.error(`Error in App ${err}`); //eslint-disable-line
	}

	dispatch({
		type: GET_FACILITY,
		payload: response
	});
};