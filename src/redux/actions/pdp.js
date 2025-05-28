import { getApiUrl } from "@/utils/helper";
import { SET_PRODUCT_DATA } from "../types";
import { setSpinner } from "./ui";
import axios from "axios";

export const getProductDetails = (id) => async (dispatch) => {
	const apiUrl = getApiUrl();
	const url = apiUrl + "/items/" + id;

	dispatch(setSpinner(true));
	const response = await axios(url, {
		method: "GET",
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Content-Type": "application/json",
		},
	}).catch((error) => {
		console.error("[getProductDetails] >> Exception:\n", error);
	});

	dispatch({
		type: SET_PRODUCT_DATA,
		payload: response?.data ?? {},
	});

	dispatch(setSpinner(false));
};
