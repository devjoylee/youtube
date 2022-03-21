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
} from 'redux/actions/types';

const videosInitialState = {
  videos: [],
  loading: false,
};

const mainInitialState = {
  ...videosInitialState,
  nextPageToken: null,
  activeCategory: 'All',
};

const watchInitialState = {
  video: null,
  loading: false,
};

export const mainVideoReducer = (state = mainInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case MAIN_VIDEOS_SUCCESS:
      return {
        ...state,
        videos:
          state.activeCategory === payload.category
            ? [...state.videos, ...payload.videos]
            : payload.videos,
        loading: false,
        nextPageToken: payload.nextPageToken,
        activeCategory: payload.category,
      };
    case MAIN_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case MAIN_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export const watchVideoReducer = (state = watchInitialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SELECTED_VIDEO_SUCCESS:
      return {
        ...state,
        video: payload,
        loading: false,
      };
    case SELECTED_VIDEO_FAIL:
      return {
        ...state,
        video: null,
        loading: false,
        error: payload.error,
      };
    case SELECTED_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export const relatedVideoReducer = (state = videosInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case RELATED_VIDEO_SUCCESS:
      return {
        ...state,
        loading: false,
        videos: payload,
      };
    case RELATED_VIDEO_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case RELATED_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export const searchVideoReducer = (state = videosInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SEARCHED_VIDEO_SUCCESS:
      return {
        ...state,
        loading: false,
        videos: payload,
      };
    case SEARCHED_VIDEO_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case SEARCHED_VIDEO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
