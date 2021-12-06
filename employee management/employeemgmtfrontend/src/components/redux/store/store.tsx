import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import createSagaMiddleware from "redux-saga";
import mySaga from "../saga/userSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
export type RootState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(...middleware));
sagaMiddleware.run(mySaga);
