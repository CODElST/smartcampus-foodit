import { ScaledSheet } from "react-native-size-matters";
import color from "../../assets/theme/color";
import { windowHeight } from "../../constants/window";

export default ScaledSheet.create({
  wrapper: {
    height: "100%",
    width: "100%",
    backgroundColor: color.background,
  },

  imageContainer: {
    height: windowHeight * 0.5,
  },

  image: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
  },

  renderItem: {
    width: "100%",
    height: "70%",
  },

  textContainer: {
    padding: 16,
  },

  Title: {
    color: color.text.primary,
    fontFamily: "Quicksand-bold",
    fontSize: "32@s",
    textAlign: "center",
    padding: 16,
  },

  Subtitle: {
    color: color.text.primary,
    fontFamily: "Quicksand-regular",
    fontSize: "16@s",
    textAlign: "center",
    padding: 16,
  },

  containerStyle: {
    backgroundColor: "transparent",
    position: "absolute",
    top: "75%",
    alignSelf: "center",
  },

  paginationDotStyle: {
    width: 24,
    height: 2,
    backgroundColor: color.secondary,
  },

  paginationInactiveDotStyle: {
    backgroundColor: color.text.secondary,
    width: 24,
    height: 2,
  },

  navigation: {
    padding: 32,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  skip: {
    fontSize: 18,
    color: color.primary,
  },
});
