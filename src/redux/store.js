import { combineReducers, createStore } from 'redux';
import profileReducer from './profileReducer';
import messageReducer from './messageReducer';
import navigationReducer from './navigationReducer';
import themeReducer from './themeReducer';
import searchReducer from './searchReducer';
import authReducer from './authReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: messageReducer,
  navigation: navigationReducer,
  search: searchReducer,
  auth: authReducer,
  theme: themeReducer,
});

let store = createStore(reducers);

export default store;
