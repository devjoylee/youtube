import {
  CHANNEL_INFO_FAIL,
  CHANNEL_INFO_REQUEST,
  CHANNEL_INFO_SUCCESS,
  SUBSCRIPTION_LIST_REQUEST,
  SUBSCRIPTION_LIST_SUCCESS,
  SUBSCRIPTION_LIST_FAIL,
  SET_SUBSCRIPTION_STATUS,
} from 'redux/actions/types';

const channelInitialState = {
  channel: {},
  loading: false,
  isSubscribed: false,
};

const subscInitialState = {
  subscriptions: [],
  loading: false,
};

export const channelReducer = (state = channelInitialState, action) => {
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

export const subscriptionReducer = (state = subscInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SUBSCRIPTION_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SUBSCRIPTION_LIST_SUCCESS:
      return {
        ...state,
        subscriptions: payload,
        loading: false,
      };
    case SUBSCRIPTION_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
