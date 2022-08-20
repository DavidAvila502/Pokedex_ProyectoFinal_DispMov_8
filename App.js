import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import NavegacionStack from "./src/Navigation/NavigationBottomTabs";

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <NavegacionStack />
      </NavigationContainer>

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
