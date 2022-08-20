import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

const LoginScreen = (props) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../Images/Login.png")}
        style={styles.ImageStyle}
        resizeMode="cover"
      >
        <TouchableOpacity
          style={styles.boton}
          onPress={() => props.navigation.navigate("Tabs")}
        ></TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    felx: 1,
  },

  ImageStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },

  boton: {
    height: 140,
    width: 140,
    // backgroundColor: "blue",
    borderRadius: 100,
  },
});

export default LoginScreen;
