import { combineReducers, createStore } from 'redux';
import profileReducer from './profileReducer';
import messageReducer from './messageReducer';
import navigationReducer from './navigationReducer';
import themeReducer from './themeReducer';
import searchReducer from './searchReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: messageReducer,
  navigation: navigationReducer,
  search: searchReducer,
  theme: themeReducer,
});

let store = createStore(reducers);

export default store;
