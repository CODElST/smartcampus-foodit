import { View, Text } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../screens/Home";

const BottomTabNavigator = () => {
  const BottomTab = createBottomTabNavigator();
  return (
    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="View" component={Home} />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
