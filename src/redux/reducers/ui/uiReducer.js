/* eslint-disable import/no-anonymous-default-export */
import {
  SET_LOGIN_MODAL,
  SET_MENU_DRAWER,
  SET_MOBILE_GRID,
  SET_PROFILE_DETAILS,
  SET_SPINNER,
} from "../../types";

const initialState = {
  isLoading: false,
  openMenuDrawer: false,
  openLoginModal: false,
  isLoggedIn: false,
  userDetails: { name: "", email: "" },
  mobileGrid: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_SPINNER:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_MENU_DRAWER:
      return {
        ...state,
        openMenuDrawer: action.payload,
      };
    case SET_LOGIN_MODAL:
      return {
        ...state,
        openLoginModal: action.payload,
      };
    case SET_PROFILE_DETAILS:
      return {
        ...state,
        userDetails: {
          name: action?.payload?.name,
          email: action?.payload?.email,
        },
        isLoggedIn: true,
      };
    case SET_MOBILE_GRID:
      return {
        ...state,
        mobileGrid: action.payload,
      };
    default:
      return state;
  }
};
