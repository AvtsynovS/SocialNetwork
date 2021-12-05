import { combineReducers, createStore } from "redux";
import messageReducer from "./messageReducer";
import navigationReducer from "./navigationReducer";
import profileReducer from "./profileReducer";
import themeReducer from "./themeReducer";

let reducers = combineReducers({
  messagePage: messageReducer,
  navigation: navigationReducer,
  theme: themeReducer,
  profilePage: profileReducer,
});

let store = createStore(reducers);

export default store;
