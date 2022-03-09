import { createStore, applyMiddleware, combineReducers } from 'redux';
import { authReducer } from 'redux/reducers/auth.reducer';
import { mainVideoReducer } from 'redux/reducers/video.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  auth: authReducer,
  mainVideo: mainVideoReducer,
});

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)));

export default store;
