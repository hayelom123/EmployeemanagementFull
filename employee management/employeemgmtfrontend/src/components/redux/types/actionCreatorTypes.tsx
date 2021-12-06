import { user, error } from "./storeTypes";
import {
  addUser,
  deleteUser,
  editUser,
  getEmployess,
  Login,
  ErrorType,
} from "./action_types";

export type addUserAction = (payload: user) => addUser;
export type deleteUserAction = (_id: string) => deleteUser; // editUserAction
export type editUserAction = (payload: user) => editUser;
export type getListOfEmployeesAction = (page: number) => getEmployess;
export type LoginAction = (login: boolean) => Login;
export type setError = (error: error) => ErrorType;
