import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import SelectionScreen from "../screens/auth/SelectionScreen";
import AuthUserScreen from "../screens/auth/AuthUserScreen";
import StartupScreen from "../screens/StartupScreen";

const SelectionNavigator = createStackNavigator({
  select: SelectionScreen,
});

const AuthNavigator = createStackNavigator({
  auth: AuthUserScreen,
});

const StartupNavigator = createStackNavigator({
  startup: StartupScreen,
});

const MainNavigator = createSwitchNavigator({
  Startup: StartupNavigator,
  Select: SelectionNavigator,
  Auth: AuthNavigator,
});

export default createAppContainer(MainNavigator);
