import React from "react";
import { View, Text, Button } from "react-native";
import { useDispatch } from "react-redux";

import * as authActions from "../../store/actions/auth";

import Colors from "../../constants/Colors";

const MainScreen = (props) => {
  const dispatch = useDispatch();
  return (
    <View>
      <Text>Main Screen</Text>
      <Button
        title="Logout"
        onPress={() => {
          dispatch(authActions.logout());
          props.navigation.navigate("SignIn");
        }}
      />
    </View>
  );
};

MainScreen.navigationOptions = {
  headerTitle: "Home",
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTitleStyle: {
    color: "#fff",
  },
};

export default MainScreen;
