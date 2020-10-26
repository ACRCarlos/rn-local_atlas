import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import StartupScreen from "../screens/StartupScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import SignInScreen from "../screens/auth/SignInScreen";

const StartupNavigator = createStackNavigator({
  startup: StartupScreen,
});

const SignUpNavigator = createStackNavigator({
  signup: SignUpScreen,
});

const SignInNavigator = createStackNavigator({
  signin: SignInScreen,
});

const MainNavigator = createSwitchNavigator({
  Startup: StartupNavigator,
  SignIn: SignInNavigator,
  SignUp: SignUpNavigator,
});

export default createAppContainer(MainNavigator);
