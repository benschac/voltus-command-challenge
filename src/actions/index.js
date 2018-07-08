// Note: Using index for now, might break this down later if it gets too big.
// https://github.com/babel/babel/issues/5085 -- annoying, curious if there is a better way?
import "babel-polyfill";
import {get} from "axios";
import {GET_ORGANIZATION} from "../actions/types";
const APIURL = "http://challenge.voltus.co/facilities/";

/**
 * Async action to get organizationId 
 * 
 * @param {string} id the organizationId
 */
export const getOrganization = (id) => async dispatch => {
	let response;
	try {
		response = await get(`${APIURL}${id}`);
	} catch (err) {
		// Todo -- Add dispatch error
		console.error(`Error in App ${err}`); //eslint-disable-line
	}

	dispatch({
		type: GET_ORGANIZATION,
		payload: response
	});
};