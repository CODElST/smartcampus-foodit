import * as Font from "expo-font";

const getFonts = async () =>
  await Font.loadAsync({
    "Quicksand-light": require("../assets/fonts/Quicksand-Light.ttf"),
    "Quicksand-regular": require("../assets/fonts/Quicksand-Regular.ttf"),
    "Quicksand-semiBold": require("../assets/fonts/Quicksand-SemiBold.ttf"),
    "Quicksand-bold": require("../assets/fonts/Quicksand-Bold.ttf"),
  });

export default getFonts;
