import { USER_LOGIN,ATTEMPT, FAILURE,USER_LOGOUT } from "../constants";

const initialState = {
  isFetching: false,
  user: [],
  token: null,
};
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isFetching: false,
        user: { ...action.payload.userdata },
        token: action.payload.Token,
      };
    case ATTEMPT:
      return {
        ...state,
        isFetching: true,
        token: null,
      };  
    case FAILURE:
      return {
        ...state,
        token: null,
        data: [],
        isFetching: false,
      };
    case USER_LOGOUT:
      return {
        ...state,
        isFetching: false,
        data: [],
        token: null,
      };
      
    default:
      return state;
  }
}
