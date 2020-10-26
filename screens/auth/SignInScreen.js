import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  Button,
  Dimensions,
  TextInput,
  StatusBar,
  ScrollView,
  Platform,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

const SignInScreen = (props) => {
  const goToSignUpHandler = () => {
    props.navigation.navigate("SignUp");
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1cd5c6" barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.textHeader}>Welcome!</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView>
          <View style={styles.button}>
            <TouchableOpacity style={styles.signIn} onPress={() => {}}>
              <LinearGradient
                colors={["#08d4c4", "#01ab9d"]}
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
                { borderColor: "#1cd5c6", borderWidth: 1, marginTop: 15 },
              ]}
              onPress={goToSignUpHandler}
            >
              <Text style={[styles.textSign, { color: "#1cd5c6" }]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

SignInScreen.navigationOptions = {
  headerTitle: "Sign In",
  headerStyle: {
    backgroundColor: "#1cd5c6",
  },
  headerTitleStyle: {
    color: "#fff",
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1cd5c6",
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
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
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
