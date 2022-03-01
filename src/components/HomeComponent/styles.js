import { ScaledSheet } from "react-native-size-matters";
import color from "../../assets/theme/color";

export default ScaledSheet.create({
  image: {
    height: "200@ms",
    width: "100%",
    alignSelf: "center",
    borderRadius: 20,
  },

  renderItem: {
    width: "100%",
    height: 300,
  },
});
