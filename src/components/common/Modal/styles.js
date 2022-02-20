import { ScaledSheet } from "react-native-size-matters";
import color from "../../../assets/theme/color";

export default ScaledSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
  },
  modalCenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000091",
  },
  modalView: {
    margin: 20,
    width: "280@s",
    paddingHorizontal: "22@s",
    backgroundColor: color.white,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  navigation: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "auto",
    marginRight: 0,
    marginVertical: "15@s",
  },
  button: {},
  button1: {
    color: color.text.black,
  },
  button2: {
    color: color.text.primary,
    marginLeft: "24@ms",
  },
  textStyle: {
    color: color.text.black,
    fontFamily: "quicksand-semiBold",
    fontSize: "14@ms",
  },
  modalIconView: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    borderBottomWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#D8DDE6",
    padding: "24@s",
  },

  modalText: {
    marginTop: "11@s",
    textAlign: "left",
    fontFamily: "quicksand-regular",
    fontSize: "12@s",
    color: color.text.highlighted,
  },
});
