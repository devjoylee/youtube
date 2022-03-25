import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
  authReducer,
  commentReducer,
  channelReducer,
  mainVideoReducer,
  watchVideoReducer,
  relatedVideoReducer,
  searchVideoReducer,
  subscriptionReducer,
  channelVideoReducer,
} from './reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  mainVideo: mainVideoReducer,
  watchVideo: watchVideoReducer,
  channelInfo: channelReducer,
  commentList: commentReducer,
  relatedVideo: relatedVideoReducer,
  searchVideo: searchVideoReducer,
  subscriptionList: subscriptionReducer,
  channelVideo: channelVideoReducer,
});

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)));

export default store;
