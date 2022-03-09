import { MAIN_VIDEOS_FAIL, MAIN_VIDEOS_REQUEST, MAIN_VIDEOS_SUCCESS } from 'redux/actions/types';

const initialState = {
  videos: [],
  loading: false,
  nextPageToken: null,
};

export const mainVideoReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case MAIN_VIDEOS_SUCCESS:
      return {
        ...state,
        videos: payload.videos,
        loading: false,
        nextPageToken: payload.nextPageToken,
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
