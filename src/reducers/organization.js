import _ from "lodash";
import {GET_ORGANIZATION, GET_READING} from "../actions/types";
const initialState = {organization: false};

/**
 * 
 * @param {object} updatedData to add to facility
 * @param {array<Object>} facilities list to mutate
 * 
 * @return {array} of facilities with updated values
 */
function updateFacilities(updatedData, facilities) {
  const id = {id: updatedData.facility_id};
  const idx = _.findIndex(facilities, id);
  let facilityToUpdate = _.find(facilities, id);
  facilityToUpdate = {...facilityToUpdate, ...updatedData};
  facilities[idx] = facilityToUpdate;
  return {...facilities};
}
/**
 * The queryParam reducer
 */
export default (state=initialState, action) => {
  switch(action.type) {
  case GET_ORGANIZATION:
    // Todo -- add API meta data to state if needed.
    return {...state, ...action.payload.data};
  case GET_READING:
  // Todo -- functional, need to give another look and clean up;
  // https://redux.js.org/faq/code-structure#structure-business-logic
  // It _seems_ like more of an architectural choice. 
    return {
      ...state,
      ...updateFacilities(
        action.payload.data,
        state.facilities
      ) 
    };
  default:
    return state;
  }
};