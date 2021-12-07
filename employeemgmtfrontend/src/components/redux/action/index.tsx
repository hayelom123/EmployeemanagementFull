import { ActionTypes } from "../action_types";
import {
  addUserAction,
  deleteUserAction,
  editUserAction,
  getListOfEmployeesAction,
  LoginAction,
  setError,
} from "../types/actionCreatorTypes";
import { error } from "../types/storeTypes";

export const deleteuserActionCreator: deleteUserAction = (_id) => {
  return {
    type: ActionTypes.DELETE_USER,
    payload: _id,
  };
};
export const edituserActionCreator: editUserAction = (payload) => {
  return {
    type: ActionTypes.EDIT_USER,
    payload,
  };
};
export const addUserActionCreator: addUserAction = (payload) => {
  return {
    type: ActionTypes.ADD_USER,
    payload,
  };
};
export const getListOfEmployees: getListOfEmployeesAction = (page) => {
  return {
    type: ActionTypes.Get_Users_Fetch,
    page,
  };
};
export const changeLogin: LoginAction = (login: boolean) => {
  return { type: ActionTypes.LogIn_STATE, login };
};
export const errorSetter: setError = (error: error) => {
  return { type: ActionTypes.ERROR_OCCURED, error };
};
