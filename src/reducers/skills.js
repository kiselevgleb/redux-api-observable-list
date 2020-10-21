import {
  GET_LIST_REQUEST,
  GET_LIST_FAILURE,
  GET_LIST_SUCCESS,
  GET_DET_REQUEST,
  GET_DET_FAILURE,
  GET_DET_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
  items: [],
  loading: false,
  error: null,
  det: {},
};

export default function skillsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_LIST_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_LIST_FAILURE:
      const {error} = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    case GET_LIST_SUCCESS:
      const {items} = action.payload;
      console.log(items);
      return {
        ...state,
        items,
        loading: false,
        error: null,
      };
      case GET_DET_REQUEST:
        const {id} = action.payload;
        return {
          ...state,
          loading: true,
          error: null,
        };
      case GET_DET_FAILURE:
        const {errorDet} = action.payload;
        return {
          ...state,
          loading: false,
          errorDet,
        };
      case GET_DET_SUCCESS:
        const {det} = action.payload;
        console.log(det);
        return {
          ...state,
          det,
          loading: false,
          error: null,
        };
    default:
      return state;
  }
}
