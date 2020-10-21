import {
  GET_LIST_REQUEST,
  GET_LIST_FAILURE,
  GET_LIST_SUCCESS,
  GET_DET_REQUEST,
  GET_DET_FAILURE,
  GET_DET_SUCCESS,
} from './actionTypes';


export const getListRequest = () => ({
  type: GET_LIST_REQUEST,
});

export const getListFailure = error => ({
  type: GET_LIST_FAILURE,
  payload: {error},
});

export const getListSuccess = items => ({
  type: GET_LIST_SUCCESS,
  payload: {items},
});
export const getDetRequest = (id) => ({
  type: GET_DET_REQUEST,
  payload: {id},
});

export const getDetFailure = errorDet => ({
  type: GET_DET_FAILURE,
  payload: {errorDet},
});

export const getDetSuccess = det => ({
  type: GET_DET_SUCCESS,
  payload: {det},
});
