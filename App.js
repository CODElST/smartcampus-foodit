import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import MainNavigator from "./src/navigations";
import styles from "./styles";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style={"light"} backgroundColor="#000000" />
      <MainNavigator />
    </SafeAreaView>
  );
}
