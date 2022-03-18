import { createStore, applyMiddleware, combineReducers } from 'redux';
import { authReducer } from 'redux/reducers/auth.reducer';
import { mainVideoReducer, watchVideoReducer } from 'redux/reducers/video.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { channelReducer } from './reducers/channel.reducer';
import thunk from 'redux-thunk';
import { commentReducer } from './reducers/comment.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  mainVideo: mainVideoReducer,
  watchVideo: watchVideoReducer,
  channelInfo: channelReducer,
  commentList: commentReducer,
});

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)));

export default store;
