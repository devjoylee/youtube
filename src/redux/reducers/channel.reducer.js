import { CHANNEL_INFO_FAIL, CHANNEL_INFO_REQUEST, CHANNEL_INFO_SUCCESS } from 'redux/actions/types';

const initialState = {
  channel: {},
  loading: false,
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
    default:
      return state;
  }
};
