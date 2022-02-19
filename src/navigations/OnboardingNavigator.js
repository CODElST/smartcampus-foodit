import { View, Text } from "react-native";
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { LOGIN, ONBOARDING } from "../constants/routeNames";
import Onboarding from "../screens/Onboarding";
import Login from "../screens/Login";

const OnboardingNavigator = () => {
  const OnboardingStack = createStackNavigator();
  return (
    <OnboardingStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <OnboardingStack.Screen name={ONBOARDING} component={Onboarding} />
      <OnboardingStack.Screen name={LOGIN} component={Login} />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingNavigator;
