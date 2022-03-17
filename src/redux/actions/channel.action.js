import { getData } from 'utils/getData';
import { CHANNEL_INFO_REQUEST, CHANNEL_INFO_SUCCESS, CHANNEL_INFO_FAIL } from './types';

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
