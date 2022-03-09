import { getData } from 'utils/getData';
import { MAIN_VIDEOS_FAIL, MAIN_VIDEOS_REQUEST, MAIN_VIDEOS_SUCCESS } from './types';

export const getPopularVideos = () => async (dispatch) => {
  try {
    dispatch({
      type: MAIN_VIDEOS_REQUEST,
    });

    const { data } = await getData('/videos', {
      params: {
        part: 'snippet,contentDetails,statistics',
        chart: 'mostPopular',
        maxResults: 20,
        pageToken: '',
      },
    });

    dispatch({
      type: MAIN_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: MAIN_VIDEOS_FAIL,
      payload: error.message,
    });
  }
};
