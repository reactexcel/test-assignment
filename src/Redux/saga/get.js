import { put, call } from "@redux-saga/core/effects";
import { getSuccess, getError } from "../action";
import axios from "axios";

export function* get(action) {
  
  let URL = `http://176.9.137.77:8080/data/values/`;
  try {
    let response = 
    yield call(axios.get, URL);
    console.log(response);
    if (response && response.data && response.data.length) {
      yield put(getSuccess({ response: response.data[0] }));
    } else {
      yield put(getError({ error: "Data not fetched" }));
    }
  } catch (error) {
    yield put(getError({ error: "Data not fetched" }));
  }
}
