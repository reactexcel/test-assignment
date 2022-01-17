import { createAction } from "redux-actions";
import * as constant from "../constant";

export const getRequest = createAction(constant.GET_REQUEST);
export const getSuccess = createAction(constant.GET_SUCCESS);
export const getError = createAction(constant.GET_ERROR);

export const updateRequest = createAction(constant.UPDATE_REQUEST);
export const updateSuccess = createAction(constant.UPDATE_SUCCESS);
export const updateError = createAction(constant.UPDATE_ERROR);