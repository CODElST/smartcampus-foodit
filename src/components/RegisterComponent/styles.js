import { ScaledSheet } from "react-native-size-matters";
import color from "../../assets/theme/color";
import { windowHeight } from "../../constants/window";

export default ScaledSheet.create({
  wrapper: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  BodyText: {
    marginVertical: "16@s",
  },
  inputForm: {
    marginTop: "16@s",
    width: "100%",
  },
  submitButton: {
    marginTop: "16@s",
  },
  Divider: {
    marginVertical: "32@s",
  },
  icon: {
    marginRight: 8,
  },
  navigation: {
    marginTop: "16@s",
  },
});
