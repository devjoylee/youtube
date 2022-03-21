import { getData } from 'utils/getData';
import {
  MAIN_VIDEOS_FAIL,
  MAIN_VIDEOS_REQUEST,
  MAIN_VIDEOS_SUCCESS,
  RELATED_VIDEO_FAIL,
  RELATED_VIDEO_REQUEST,
  RELATED_VIDEO_SUCCESS,
  SEARCHED_VIDEO_FAIL,
  SEARCHED_VIDEO_REQUEST,
  SEARCHED_VIDEO_SUCCESS,
  SELECTED_VIDEO_FAIL,
  SELECTED_VIDEO_REQUEST,
  SELECTED_VIDEO_SUCCESS,
} from './types';

export const getPopularVideos = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: MAIN_VIDEOS_REQUEST,
    });

    const { data } = await getData('/videos', {
      params: {
        part: 'snippet,contentDetails,statistics',
        chart: 'mostPopular',
        maxResults: 20,
        regionCode: 'KR',
        pageToken: getState().mainVideo.nextPageToken,
      },
    });

    dispatch({
      type: MAIN_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: 'All',
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

export const getVideosByCategory = (keyword) => async (dispatch, getState) => {
  try {
    dispatch({
      type: MAIN_VIDEOS_REQUEST,
    });

    const { data } = await getData('/search', {
      params: {
        part: 'snippet',
        maxResults: 20,
        pageToken: getState().mainVideo.nextPageToken,
        q: keyword,
        type: 'video',
      },
    });

    dispatch({
      type: MAIN_VIDEOS_SUCCESS,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: keyword,
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

export const getVideoById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: SELECTED_VIDEO_REQUEST,
    });

    const { data } = await getData('/videos', {
      params: {
        part: 'snippet, statistics',
        id: id,
      },
    });

    dispatch({
      type: SELECTED_VIDEO_SUCCESS,
      payload: data.items[0],
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: SELECTED_VIDEO_FAIL,
      payload: error.message,
    });
  }
};

export const getRelatedVideo = (id) => async (dispatch) => {
  try {
    dispatch({
      type: RELATED_VIDEO_REQUEST,
    });

    const { data } = await getData('/search', {
      params: {
        part: 'snippet',
        relatedToVideoId: id,
        maxResults: 15,
        type: 'video',
      },
    });

    dispatch({
      type: RELATED_VIDEO_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    console.log(error.response.data);
    dispatch({
      type: RELATED_VIDEO_FAIL,
      payload: error.response.data,
    });
  }
};

export const getVideosBySearch = (keyword) => async (dispatch) => {
  try {
    dispatch({
      type: SEARCHED_VIDEO_REQUEST,
    });

    const { data } = await getData('/search', {
      params: {
        part: 'snippet',
        maxResults: 20,
        q: keyword,
        type: 'video,channel',
      },
    });

    dispatch({
      type: SEARCHED_VIDEO_SUCCESS,
      payload: data.items,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: SEARCHED_VIDEO_FAIL,
      payload: error.message,
    });
  }
};
