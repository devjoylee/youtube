import { CHANNEL_INFO_FAIL, CHANNEL_INFO_REQUEST, CHANNEL_INFO_SUCCESS, SET_SUBSCRIPTION_STATUS } from 'redux/actions/types';

const initialState = {
  channel: {},
  loading: false,
  isSubscribed: false,
};

export const channelReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHANNEL_INFO_SUCCESS:
      return {
        ...state,
        channel: payload,
        loading: false,
      };
    case CHANNEL_INFO_FAIL:
      return {
        ...state,
        channel: null,
        loading: false,
        error: payload,
      };
    case CHANNEL_INFO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SET_SUBSCRIPTION_STATUS:
      return {
        ...state,
        isSubscribed: payload,
      };
    default:
      return state;
  }
};
