import React from "react";
import { View, Button, Text } from "react-native";

const SelectionScreen = (props) => {
  const userHandler = () => {
    props.navigation.navigate("Auth");
  };

  return (
    <View>
      <Text>Who are you?</Text>
      <Button onPress={userHandler} title="User" />
    </View>
  );
};

SelectionScreen.navigationOptions = {
  headerTitle: "Select Your Type",
};

export default SelectionScreen;
