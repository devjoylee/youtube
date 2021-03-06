import { LOAD_PROFILE, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOG_OUT } from 'redux/actions/types';

const savedToken = sessionStorage.getItem('youtube-token');
const savedUser = sessionStorage.getItem('youtube-user');

const initialState = {
  accessToken: savedToken ? savedToken : null,
  user: savedUser ? JSON.parse(savedUser) : null,
  loading: false,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        accessToken: payload,
        loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        accessToken: null,
        loading: false,
        error: payload,
      };
    case LOAD_PROFILE:
      return {
        ...state,
        user: payload,
      };
    case LOG_OUT:
      return {
        ...state,
        accessToken: null,
        user: null,
      };
    default:
      return state;
  }
};
