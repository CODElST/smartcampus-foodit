import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import OnboardingNavigator from "./OnboardingNavigator";
import BottomTabNavigator from "./BottomTabNavigator";
import getFonts from "../helpers/getFont";
import AppLoadingScreen from "../screens/AppLoadingScreen";

const MainNavigator = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [authenticated, setAuthenticated] = React.useState(false);

  React.useEffect(async () => {
    getFonts().then((res) => setIsLoading(false));
  }, []);
  return (
    <>
      {isLoading ? (
        <AppLoadingScreen />
      ) : (
        <NavigationContainer>
          {authenticated ? <BottomTabNavigator /> : <OnboardingNavigator />}
        </NavigationContainer>
      )}
    </>
  );
};

export default MainNavigator;
