import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import StartupScreen from "../screens/StartupScreen";
import SignUpScreen from "../screens/auth/SignUpScreen";
import SignInScreen from "../screens/auth/SignInScreen";
import HomeScreen from "../screens/main/HomeScreen";

const StartupNavigator = createStackNavigator({
  startup: StartupScreen,
});

const SignUpNavigator = createStackNavigator({
  signup: SignUpScreen,
});

const SignInNavigator = createStackNavigator({
  signin: SignInScreen,
});

const HomeNavigator = createStackNavigator({
  home: HomeScreen,
});

const MainNavigator = createSwitchNavigator({
  Startup: StartupNavigator,
  SignIn: SignInNavigator,
  SignUp: SignUpNavigator,
  Home: HomeNavigator,
});

export default createAppContainer(MainNavigator);
