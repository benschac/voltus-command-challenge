// Note: Using index for now, might break this down later if it gets too big.
// https://github.com/babel/babel/issues/5085 -- annoying, curious if there is a better way?
import "babel-polyfill";
import {get} from "axios";
import {GET_ORGANIZATION, GET_READING} from "../actions/types";
const ORGANIZATION_API = "http://challenge.voltus.co/facilities/";
const READING_API = "http://challenge.voltus.co/readings/";

/**
 * Async action to get organizationId 
 * 
 * @param {string} id the organizationId
 */
export const getOrganization = id => async dispatch => {
  let response;
  try {
    response = await get(`${ORGANIZATION_API}${id}`);
  } catch (err) {
    // Todo -- Add dispatch error
    console.error(`Error in App ${err}`); //eslint-disable-line
  }

  dispatch({
    type: GET_ORGANIZATION,
    payload: response
  });
};

/**
 * Get Facility reading
 * 
 * @param {array} facilities to get readings from
 */
export const getReadings = id => async dispatch => {
  let response;
  let allReadings;
  // research generator functions 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
  try {
    response =  await get(`${READING_API}${id}`);
  } catch(e) {
    console.error(`Error in App ${err}`); //eslint-disable-line
  }

  dispatch({
    type: GET_READING,
    payload: response
  });
}; 