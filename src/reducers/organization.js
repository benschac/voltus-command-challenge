import {GET_ORGANIZATION} from "../actions/types";
const initialState = {facility: false};
/**
 * The queryParam reducer
 */
export default (state=initialState, action) => {
  switch(action.type) {
  case GET_ORGANIZATION:
    // Todo -- add API meta data to state if needed.
    return {...state, ...action.payload.data};
  default:
    return state;
  }
};