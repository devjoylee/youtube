import { MAIN_VIDEOS_FAIL, MAIN_VIDEOS_REQUEST, MAIN_VIDEOS_SUCCESS } from 'redux/actions/types';

const initialState = {
  videos: [],
  loading: false,
  nextPageToken: null,
  activeCategory: 'All',
};

export const mainVideoReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case MAIN_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: state.activeCategory === payload.category ? [...state.videos, ...payload.videos] : payload.videos,
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
