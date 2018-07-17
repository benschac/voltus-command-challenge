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
  // Todo -- Add a loading action.
  let response = await get(`${ORGANIZATION_API}${id}`);
  try {
    dispatch({
      type: GET_ORGANIZATION,
      payload: response
    });
  } catch (err) {
    // Todo -- Add dispatch failure
    console.error(`Error in App ${err}`); //eslint-disable-line
  } finally {
    dispatch(getReadings(response.data.facilities));
  }
};

/**
 * Get Facility reading
 * 
 * @param {array} facilities to get readings from
 */
export const getReadings = facilities => async dispatch => {
  // research generator functions 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*
  // Todo -- Add a loading action.
  try {
    for (let facility of facilities) {
      dispatch({
        type: GET_READING,
        payload: await get(`${READING_API}${facility.id}`)
      });
    }
  } catch(e) {
    // Todo -- Add dispatch failure
    console.error(`Error in App ${e}`); //eslint-disable-line
  }
}; 