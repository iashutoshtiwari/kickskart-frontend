/* eslint-disable import/no-anonymous-default-export */
import { SET_PRODUCT_LIST } from "../../types";

const initialState = {
	list: [],
	pageLoaded: false,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case SET_PRODUCT_LIST:
			return {
				...state,
				list: action.payload,
				pageLoaded: true,
			};

		default:
			return state;
	}
};
