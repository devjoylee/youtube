import { getData } from 'utils/getData';
import {
  CHANNEL_INFO_REQUEST,
  CHANNEL_INFO_SUCCESS,
  CHANNEL_INFO_FAIL,
  SUBSCRIPTION_LIST_REQUEST,
  SUBSCRIPTION_LIST_SUCCESS,
  SUBSCRIPTION_LIST_FAIL,
  SET_SUBSCRIPTION_STATUS,
} from './types';

export const getChannelInfo = (id) => async (dispatch) => {
  try {
    dispatch({
      type: CHANNEL_INFO_REQUEST,
    });

    const { data } = await getData('/channels', {
      params: {
        part: 'snippet, statistics, contentDetails',
        id: id,
      },
    });

    dispatch({
      type: CHANNEL_INFO_SUCCESS,
      payload: data.items[0],
    });
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: CHANNEL_INFO_FAIL,
      payload: error.response.data,
    });
  }
};

export const subscriptionStatus = (id) => async (dispatch, getState) => {
  try {
    const { data } = await getData('/subscriptions', {
      params: {
        part: 'snippet',
        forChannelId: id,
        mine: true,
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });

    dispatch({
      type: SET_SUBSCRIPTION_STATUS,
      payload: data.items.length !== 0,
    });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const getMySubscriptions = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: SUBSCRIPTION_LIST_REQUEST,
    });
    const { data } = await getData('/subscriptions', {
      params: {
        part: 'snippet, contentDetails',
        mine: true,
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });

    dispatch({
      type: SUBSCRIPTION_LIST_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: SUBSCRIPTION_LIST_FAIL,
      payload: error.message,
    });
  }
};
