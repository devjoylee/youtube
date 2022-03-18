import { getData } from 'utils/getData';
import { COMMENT_LIST_REQUEST, COMMENT_LIST_SUCCESS, COMMENT_LIST_FAIL } from './types';

export const getCommentsById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: COMMENT_LIST_REQUEST,
    });

    const { data } = await getData('/commentThreads', {
      params: {
        part: 'snippet',
        videoId: id,
      },
    });

    console.log(data);

    dispatch({
      type: COMMENT_LIST_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: COMMENT_LIST_FAIL,
      payload: error.response.data,
    });
  }
};
