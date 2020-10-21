import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

// import authReducer from "./store/reducers/auth";

import AppNavigator from "./navigation/AppNavigator";

// const rootReducer = combineReducers({
//   auth: authReducer,
// });

// const store = createStore(rootReducer);

export default function App() {
  return (
    // <Provider store={store}>
    <AppNavigator />
    // {/* </Provider> */}
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
