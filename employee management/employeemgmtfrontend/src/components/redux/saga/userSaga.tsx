import { call, put, takeLatest, StrictEffect } from "redux-saga/effects";
// import { addDataToServer } from "../../../data";
import { ActionTypes } from "../action_types";
import userApi from "../api/userApi";
import { AxiosResponse } from "axios";
import cookie from "react-cookies";
import {
  addUser,
  deleteUser,
  editUser,
  getEmployess,
  goTEmployess,
} from "../types/action_types";

function* mySaga(): Generator<StrictEffect> {
  yield takeLatest(ActionTypes.ADD_USER, addNewUserWorker);
  yield takeLatest(ActionTypes.DELETE_USER, deleteUserWorker);
  yield takeLatest(ActionTypes.Get_Users_Fetch, getListOfEmployees);
  yield takeLatest(ActionTypes.EDIT_USER, editUserSaga);
}

function* getListOfEmployees({ page }: getEmployess) {
  console.log(userApi.post);
  try {
    const response: AxiosResponse = yield call(
      userApi.post,
      "/get-all-employees",
      {},
      {
        headers: {
          token: cookie.load("user")["token"],
          //   token: cookie.load("user")["token"],
        },
      }
    );
    console.log(response);
    if (response.status === 200) {
      const data: goTEmployess = {
        type: ActionTypes.Got_users,
        payload: response.data,
      };
      yield put(data);
    }
  } catch (e) {
    console.log(e);
    yield put({
      type: ActionTypes.ERROR_OCCURED,
      error: {
        message: "fetch data failed ",
        id: ActionTypes.Get_Users_Fetch,
        failed: true,
        open: true,
      },
    });
  }
}
function* addNewUserWorker({ payload }: addUser) {
  try {
    const response: AxiosResponse = yield call(
      userApi.post,
      "/add-new-employee",
      {
        ...payload,
      },
      {
        headers: {
          token: cookie.load("user")["token"],
        },
      }
    );

    if (response.status === 200) {
      yield put({
        type: ActionTypes.ERROR_OCCURED,
        error: {
          message: "succesfully Registered ",
          id: ActionTypes.ADD_USER,
          failed: false,
          open: true,
        },
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.ERROR_OCCURED,
      error: {
        message: "failed to register ",
        id: ActionTypes.ADD_USER,
        failed: true,
        open: true,
      },
    });
  }
}
function* deleteUserWorker({ payload }: deleteUser) {
  try {
    const response: AxiosResponse = yield call(
      userApi.post,
      "/delete-employee",
      {
        id: payload,
      },
      {
        headers: {
          token: cookie.load("user")["token"],
        },
      }
    );
    console.log(response);
    if (response.status === 200) {
      yield put({
        type: ActionTypes.ERROR_OCCURED,
        error: {
          message: "succesfully Deleted ",
          id: ActionTypes.DELETE_USER,
          failed: false,
          open: true,
        },
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.ERROR_OCCURED,
      error: {
        message: "failed To Delete",
        id: ActionTypes.DELETE_USER,
        failed: true,
        open: true,
      },
    });
  }
}
function* editUserSaga({ payload }: editUser) {
  try {
    const response: AxiosResponse = yield call(
      userApi.post,
      "/edit-employee",
      {
        ...payload,
      },
      {
        headers: {
          token: cookie.load("user")["token"],
        },
      }
    );
    console.log(response);
    if (response.status === 200) {
      yield put({
        type: ActionTypes.ERROR_OCCURED,
        error: {
          message: "succesfully Edited ",
          id: ActionTypes.EDIT_USER,
          failed: false,
          open: true,
        },
      });
    }
  } catch (e) {
    yield put({
      type: ActionTypes.ERROR_OCCURED,
      error: {
        message: "Edditing Failed! ",
        id: ActionTypes.EDIT_USER,
        failed: true,
        open: true,
      },
    });
  }
}

export default mySaga;
