import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import authReducer from "./store/reducers/auth";

import AppNavigator from "./navigation/AppNavigator";

const middleware = [thunk];

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
