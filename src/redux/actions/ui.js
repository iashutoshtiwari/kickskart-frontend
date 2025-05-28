import {
  SET_LOGIN_MODAL,
  SET_MENU_DRAWER,
  SET_PROFILE_DETAILS,
  SET_SPINNER,
  SET_MOBILE_GRID,
} from "../types";

export const setSpinner = (value) => async (dispatch) => {
  dispatch({
    type: SET_SPINNER,
    payload: value,
  });
};

export const setMenuDrawer = (value) => async (dispatch) => {
  dispatch({
    type: SET_MENU_DRAWER,
    payload: value,
  });
};

export const setLoginModal = (value) => async (dispatch) => {
  dispatch({
    type: SET_LOGIN_MODAL,
    payload: value,
  });
};

export const setLoginDetails = () => async (dispatch) => {
  dispatch({
    type: SET_PROFILE_DETAILS,
    payload: value,
  });
};

export const toggleMobileGrid = (value) => async (dispatch) => {
  dispatch({
    type: SET_MOBILE_GRID,
    payload: value,
  });
};
