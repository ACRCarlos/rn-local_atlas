import React from "react";
import { Dimensions, StyleSheet, View, StatusBar, Text } from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const StartupScreen = (props) => {
  const nextScreenHandler = () => {
    props.navigation.navigate("SignIn");
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#1cd5c6" barStyle="dark-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duration={1500}
          source={require("../assets/logo.png")}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.title}>Great local recommendations worldwide</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={nextScreenHandler}>
            <LinearGradient
              colors={["#08d4c4", "#01ab9d"]}
              style={styles.signIn}
            >
              <Text style={styles.textSign}>Let's go </Text>
              <AntDesign name="arrowright" size={24} color="#fff" />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

StartupScreen.navigationOptions = {
  headerTitle: "Local Atlas",
  headerStyle: {
    backgroundColor: "#1cd5c6",
  },
  headerTitleStyle: {
    color: "#fff",
  },
};

const { height } = Dimensions.get("screen");
const heightLogo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#1cd5c6",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: heightLogo,
    height: heightLogo,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  text: {
    color: "#fff",
    marginTop: 5,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
});

export default StartupScreen;
