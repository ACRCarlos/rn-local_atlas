import React, { useCallback, useEffect, useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView,
  Platform,
  Alert,
  ActivityIndicator,
} from "react-native";

import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";

import * as authActions from "../../store/actions/auth";

import Input from "../../components/UI/Input";

import Colors from "../../constants/Colors";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};

const SignInScreen = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  useEffect(() => {
    if (error) {
      Alert.alert("An Error Ocurred!", error, [{ text: "Okay" }]);
    }
  }, [error]);

  const goToSignUpHandler = () => {
    props.navigation.navigate("SignUp");
  };

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  const signInHandler = async () => {
    let action;
    action = authActions.signIn(
      formState.inputValues.email,
      formState.inputValues.password
    );

    setError(null);
    setIsLoading(true);

    try {
      await dispatch(action);
      props.navigation.navigate("Home");
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary} barStyle="dark-content" />

      <View style={styles.header}>
        <Text style={styles.textHeader}>Welcome!</Text>
      </View>

      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <View>
            <Input
              id="email"
              placeholder="Your Email"
              keyboardType="email-address"
              required
              email
              autoCapitalize="none"
              errorText="Please enter a valid email address."
              onInputChange={inputChangeHandler}
              initialValue=""
            />
            <Input
              id="password"
              placeholder="Your Password"
              keyboardType="default"
              secureTextEntry
              required
              minLength={5}
              autoCapitalize="none"
              errorText="Please enter a valid password"
              onInputChange={inputChangeHandler}
              initialValue=""
            />
          </View>

          <TouchableOpacity>
            <Text style={{ color: Colors.primary, marginTop: 15 }}>
              Forgot password?
            </Text>
          </TouchableOpacity>

          {isLoading ? (
            <View style={styles.button}>
              <ActivityIndicator size="large" color={Colors.primary} />
            </View>
          ) : (
            <View style={styles.button}>
              <TouchableOpacity style={styles.signIn} onPress={signInHandler}>
                <LinearGradient
                  colors={[Colors.primary, "#01ab9d"]}
                  style={styles.signIn}
                >
                  <Text style={[styles.textSign, { color: "#fff" }]}>
                    Sign In
                  </Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.signIn,
                  {
                    borderColor: Colors.primary,
                    borderWidth: 1,
                    marginTop: 15,
                  },
                ]}
                onPress={goToSignUpHandler}
              >
                <Text style={[styles.textSign, { color: Colors.primary }]}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

SignInScreen.navigationOptions = {
  headerTitle: "Sign In",
  headerStyle: {
    backgroundColor: Colors.primary,
  },
  headerTitleStyle: {
    color: "#fff",
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: Platform.OS === "ios" ? 3 : 5,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  textHeader: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  textFooter: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textPrivate: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
  },
  colorTextPrivate: {
    color: "grey",
  },
});

export default SignInScreen;
