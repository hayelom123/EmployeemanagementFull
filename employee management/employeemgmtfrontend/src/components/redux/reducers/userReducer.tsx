import { Action } from "../types/action_types";
// import { user, } from "../types/storeTypes";
import storeType from "../types/storeTypes";
import { ActionTypes } from "../action_types";
const intialState = {
  users: [],
  login: false,
  error: {
    message: "",
    id: "",
    failed: false,
    open: false,
  },
};
export const userReducer = (state: storeType = intialState, action: Action) => {
  switch (action.type) {
    case ActionTypes.Got_users:
      console.log(action.payload);
      return { ...state, users: [...action.payload] };
    case ActionTypes.USER_ADDED:
      console.log(action.payload);
      return { ...state, users: [...state.users, action.payload] };
    case ActionTypes.DELETE_USER:
      return {
        ...state,
        users: [...state.users.filter((el) => el._id !== action.payload)],
      };
    case ActionTypes.LogIn_STATE:
      console.log("user Reducer login status:", state.login);
      return {
        ...state,
        login: action.login,
      };
    case ActionTypes.ERROR_OCCURED:
      console.log("user Reducer error status:", action);
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
export default userReducer;
