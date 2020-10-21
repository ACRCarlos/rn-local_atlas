import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import SelectionScreen from "../screens/auth/SelectionScreen";
import AuthUserScreen from "../screens/auth/AuthUserScreen";

const SelectionNavigator = createStackNavigator({
  select: SelectionScreen,
});

const AuthNavigator = createStackNavigator({
  auth: AuthUserScreen,
});

const MainNavigator = createSwitchNavigator({
  Select: SelectionNavigator,
  Auth: AuthNavigator,
});

export default createAppContainer(MainNavigator);
