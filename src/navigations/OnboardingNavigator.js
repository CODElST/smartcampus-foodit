import { View, Text } from "react-native";
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { LOGIN, ONBOARDING, REGISTER } from "../constants/routeNames";
import Onboarding from "../screens/Onboarding";
import Login from "../screens/Login";
import Register from "../screens/Register";
import color from "../assets/theme/color";

const OnboardingNavigator = () => {
  const OnboardingStack = createStackNavigator();
  return (
    <OnboardingStack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: color.background,
        },
      }}
    >
      <OnboardingStack.Screen name={ONBOARDING} component={Onboarding} />
      <OnboardingStack.Screen name={LOGIN} component={Login} />
      <OnboardingStack.Screen name={REGISTER} component={Register} />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingNavigator;
