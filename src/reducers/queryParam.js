import {GET_FACILITY} from "../actions/types";
const initialState = {facility: false};
/**
 * The queryParam reducer
 */
export default (state=initialState, action) => {
	switch(action.type) {
	case GET_FACILITY:
		return {...state, facility: action.payload};
	default:
		return state;
	}
};