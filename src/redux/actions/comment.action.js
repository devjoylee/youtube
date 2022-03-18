import { getData } from 'utils/getData';
import { COMMENT_LIST_REQUEST, COMMENT_LIST_SUCCESS, COMMENT_LIST_FAIL, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAIL } from './types';

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

export const addComment = (id, text) => async (dispatch, getState) => {
  try {
    const obj = {
      snippet: {
        videoId: id,
        topLevelComment: {
          snippet: {
            textOriginal: text,
          },
        },
      },
    };

    await getData.post('/commentThreads', obj, {
      params: {
        part: 'snippet',
      },
      headers: {
        Authorization: `Bearer ${getState().auth.accessToken}`,
      },
    });

    dispatch({
      type: ADD_COMMENT_SUCCESS,
    });
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: ADD_COMMENT_FAIL,
      payload: error.response.data,
    });
  }
};
