import React from "react";
import { View, Text } from "react-native";

const AuthScreen = (props) => {
  return (
    <View>
      <Text>Login Page</Text>
    </View>
  );
};

AuthScreen.navigationOptions = {
  headerTitle: "User Authenticate",
};

export default AuthScreen;
