import { ScaledSheet } from "react-native-size-matters";
import color from "../../assets/theme/color";

export default ScaledSheet.create({
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: color.background,
  },

  logo: {
    width: "130@s",
    height: "150@s",
  },
});
