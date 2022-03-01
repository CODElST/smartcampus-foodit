import { ScaledSheet } from "react-native-size-matters";

export default ScaledSheet.create({
  image: {
    height: "200@ms",
    width: "100%",
    alignSelf: "center",
    borderRadius: 20,
  },

  renderItem: {
    width: "100%",
    height: "250@ms",
    marginVertical: "8@s",
  },

  content: {
    textAlign: "left",
  },
});
