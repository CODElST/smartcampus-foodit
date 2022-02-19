import { ScaledSheet } from "react-native-size-matters";
import color from "../../../assets/theme/color";

export default ScaledSheet.create({
  wrapper: {
    height: 64,
    width: 64,
    borderRadius: 9999,
    display: "flex",
    justifyContent: "center",
  },
  loader: {
    top: "50%",
  },
  text: {
    textAlign: "center",
    fontSize: "14@ms",
    fontFamily: "Quicksand-semiBold",
  },
});
