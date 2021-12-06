import { ActionTypes } from "../action_types";
import { user, error } from "../types/storeTypes";
export interface addUser {
  type: ActionTypes.ADD_USER;
  payload: user;
}
export interface UserAdded {
  type: ActionTypes.USER_ADDED;
  payload: user;
}
export interface deleteUser {
  type: ActionTypes.DELETE_USER;
  payload: string;
}
export interface editUser {
  type: ActionTypes.EDIT_USER;
  payload: user;
}
//editUser
export interface getEmployess {
  type: ActionTypes.Get_Users_Fetch;
  page: number;
}
export interface goTEmployess {
  type: ActionTypes.Got_users;
  payload: user[];
}
export interface Login {
  type: ActionTypes.LogIn_STATE;
  login: boolean;
}
export interface ErrorType {
  type: ActionTypes.ERROR_OCCURED;
  error: error;
}
export type Action =
  | addUser
  | deleteUser
  | goTEmployess
  | UserAdded
  | editUser
  | Login
  | ErrorType;
