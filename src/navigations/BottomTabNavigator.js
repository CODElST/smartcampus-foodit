import { View, Text } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";

import Home from "../screens/Home";
import HomeHeaderComponent from "../components/HomeHeaderComponent";
import color from "../assets/theme/color";
import { CART, HISTORY, HOME } from "../constants/routeNames";

const BottomTabNavigator = () => {
  const BottomTab = createBottomTabNavigator();
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#262228" },
        tabBarActiveTintColor: color.primary,
        tabBarInactiveTintColor: color.disabled,
      }}
      sceneContainerStyle={{ backgroundColor: color.background }}
    >
      <BottomTab.Screen
        name={HOME}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="home"
              size={24}
              color={focused ? color.primary : color.disabled}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={CART}
        component={Home}
        options={{
          tabBarLabelStyle: { display: "none" },
          tabBarIcon: () => (
            <AntDesign
              name="shoppingcart"
              size={36}
              color={color.secondary}
              style={{
                position: "absolute",
                top: -36,
                padding: 16,
                backgroundColor: color.primary,
                borderRadius: 9999,
                borderWidth: 10,
                borderColor: "#262228",
                textAlign: "center",
                textAlignVertical: "center",
              }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={HISTORY}
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="history"
              size={24}
              color={focused ? color.primary : color.disabled}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
