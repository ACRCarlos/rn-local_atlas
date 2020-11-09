import React, { useState } from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { AppLoading } from "expo";
import * as Font from "expo-font";

import authReducer from "./store/reducers/auth";

import AppNavigator from "./navigation/AppNavigator";

const middleware = [thunk];

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(...middleware));

const fectchFonts = () => {
  return Font.loadAsync({
    bahn: require("./assets/fonts/Bahnschrift.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    <AppLoading
      startAsync={fectchFonts}
      onFinish={() => {
        setFontLoaded(true);
      }}
    />;
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
