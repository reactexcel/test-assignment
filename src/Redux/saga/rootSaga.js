import * as action from "../constant";
import { fork, all, takeEvery } from "redux-saga/effects";
import { get } from "./get";
import {update} from "./update"

function* getSaga() {
  yield takeEvery(action.GET_REQUEST, get);
}

function* updateSaga() { 
  yield takeEvery(action.UPDATE_REQUEST, update)
}

export default function* rootSaga() {
  yield all([fork(getSaga), fork(updateSaga)]);
}
