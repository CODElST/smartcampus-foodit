import { ScaledSheet } from "react-native-size-matters";
import color from "../../assets/theme/color";

export default ScaledSheet.create({
  wrapper: {
    padding: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
  },

  icon: {
    backgroundColor: color.disabled,
    padding: 8,
    borderRadius: 9999,
  },

  location: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  avatar: {
    height: 40,
    width: 40,
    borderRadius: 9999,
  },
});
