import _ from "lodash";
import {GET_ORGANIZATION, GET_READING} from "../actions/types";
const initialState = {facility: false};
/**
 * The queryParam reducer
 */
export default (state=initialState, action) => {
  let facilityId;
  let updatedFacilityReading;
  let facilityToUpdate;
  let updatedFacility;

  switch(action.type) {
  case GET_ORGANIZATION:
    // Todo -- add API meta data to state if needed.
    return {...state, ...action.payload.data};
  case GET_READING:
  // Todo -- functional, need to give another look and clean up;
    updatedFacilityReading = action.payload.data;
    facilityId             = updatedFacilityReading.facility_id;
    facilityToUpdate       = _.find(state.facilities, {id: facilityId});
    updatedFacility = {...facilityToUpdate, ...updatedFacilityReading};

    _.extend(_.find(state.facilities, {id:facilityId}), updatedFacility);

    return {...state};
  default:
    return state;
  }
};