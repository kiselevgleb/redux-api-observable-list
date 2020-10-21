import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, retry, concatMap, catchError } from 'rxjs/operators';
import { GET_DET_REQUEST, GET_LIST_REQUEST } from '../actions/actionTypes';
import { getListSuccess, getListFailure, getDetSuccess, getDetFailure } from '../actions/actionCreators';
import { of } from 'rxjs';

export const getListEpic = action$ => action$.pipe(
  ofType(GET_LIST_REQUEST),
  concatMap(o => ajax.getJSON(`${process.env.REACT_APP_GET_URL}`).pipe(
    retry(3),
    map(o => getListSuccess(o)),
    catchError(e => of(getListFailure(e))),
  ))
);

export const getDetEpic = action$ => action$.pipe(
  ofType(GET_DET_REQUEST),
  map(o => o.payload.id),
  concatMap(o => ajax.getJSON(`${process.env.REACT_APP_GET_URL}/${o}`).pipe(
    retry(3),
    map(o => getDetSuccess(o)),
    catchError(e => of(getDetFailure(e))),
  ))
);