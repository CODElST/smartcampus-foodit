import { ScaledSheet } from "react-native-size-matters";
import color from "../../../assets/theme/color";

export default ScaledSheet.create({
  wrapper: {
    height: "40@ms",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: color.primary,
    paddingHorizontal: 24,
    paddingVertical: 10,
    // backgroundColor: color.white,
  },

  inputContainer: {
    width: "100%",
    marginVertical: "8@s",
  },

  label: {
    fontFamily: "Quicksand-regular",
    fontSize: "10@s",
    marginLeft: 20,
    color: color.text.primary,
  },

  textInput: {
    flex: 1,
    width: "100%",
    fontFamily: "Quicksand-regular",
    fontSize: "16@ms",
    color: color.text.primary,
  },

  error: {
    color: color.danger,
    paddingTop: 4,
    fontSize: 12,
  },
});
