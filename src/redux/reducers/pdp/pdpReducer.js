/* eslint-disable import/no-anonymous-default-export */
import { SET_PRODUCT_DATA } from "../../types";

const initialState = {
	details: {},
	pageLoaded: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_PRODUCT_DATA:
			return {
				...state,
				details: action.payload,
				pageLoaded: true,
			};

		default:
			return state;
	}
};
