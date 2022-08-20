import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity, Alert } from "react-native";
import LoginScreen from "../Screens/LoginScreen";

import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();

const Mytabs = (props) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        tabBarActiveBackgroundColor: "#FF0000",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Cerrar sesion",
          tabBarLabelPosition: "below-icon",
          tabBarLabelStyle: {
            marginBottom: 5,
            fontSize: 13,
          },
          tabBarStyle: { height: 60 },
          tabBarIcon: ({ color, size }) => (
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Icon1
                name="pokeball"
                color={color}
                size={34}
                style={{ marginTop: 5 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const NavegacionStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Tabs"
        component={Mytabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default NavegacionStack;
