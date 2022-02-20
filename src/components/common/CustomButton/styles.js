import { ScaledSheet } from "react-native-size-matters";
import color from "../../../assets/theme/color";

export default ScaledSheet.create({
  wrapper: {
    minWidth: 140,
    minHeight: 40,
    paddingHorizontal: 33,
    borderRadius: 20,
  },
  floatWrapper: {
    height: 64,
    width: 64,
    borderRadius: 9999,
    display: "flex",
    justifyContent: "center",
  },
  loader: {
    top: "50%",
  },
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: "14@ms",
    fontFamily: "Quicksand-semiBold",
  },
});
