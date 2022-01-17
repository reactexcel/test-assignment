import { put, call } from "@redux-saga/core/effects";
import { updateSuccess, updateError } from "../action";
import axios from "axios";

export function* update(action) {
  try {
    let URL = `http://176.9.137.77:8080/data/values/`;
    console.log(action.payload);
    let response = yield call(axios.post, URL, action.payload);
    if (response) {
      yield put(updateSuccess({ response: response }));
    } else {
      yield put(updateError({ error: "Data not fetched" }));
    }
  } catch (error) {
    yield put(updateError({ error: error }));
  }
}
