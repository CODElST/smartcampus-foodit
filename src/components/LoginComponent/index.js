import { View, Text, Pressable } from "react-native";
import React from "react";

import { Entypo, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import Container from "../common/Container";
import { CustomButton } from "../common/CustomButton";
import Title from "../common/Text/Title";
import BodyText from "../common/Text/BodyText";
import Input from "../common/Input";
import color from "../../assets/theme/color";
import reg from "../../utils/emailRegExp";
import { REGISTER } from "../../constants/routeNames";

const Index = () => {
  const [visible, setVisible] = React.useState(false);
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [emailError, setEmailError] = React.useState(null);
  const [passwordError, setPasswordError] = React.useState(null);

  const { navigate } = useNavigation();

  const handleSubmit = () => {
    if (email && reg.test(email)) {
      setEmailError(null);
      if (password) {
        setPasswordError(null);
        navigate(OTP_VERIFY, {
          phoneCode: "+" + phoneCode,
          phoneNumber: phoneNumber,
        });
      } else {
        setPasswordError("Invalid Password");
      }
    } else {
      setEmailError("Invalid email");
    }
  };

  return (
    <Container>
      <View style={styles.wrapper}>
        <Title secondary title={"Login"} />
        <BodyText
          style={styles.BodyText}
          primary
          content={"Please login using any of the options"}
        />
        <View style={styles.inputForm}>
          <Input
            label="Email"
            autoComplete="email"
            keyboardType="email-address"
            onChangeText={(value) => setEmail(value)}
            value={email}
            error={emailError}
          />
          <Input
            label="Password"
            onChangeText={(value) => setPassword(value)}
            value={password}
            error={passwordError}
            icon={
              !visible ? (
                <Entypo
                  name="eye"
                  size={24}
                  color={color.secondary}
                  onPress={() => setVisible(!visible)}
                />
              ) : (
                <Entypo
                  name="eye-with-line"
                  size={24}
                  color={color.secondary}
                  onPress={() => setVisible(!visible)}
                />
              )
            }
            iconPosition="right"
            secureTextEntry={!visible}
          />
        </View>
        <CustomButton
          style={styles.submitButton}
          secondary
          disabled={email && password ? false : true}
          title="Submit"
          onPress={() => handleSubmit()}
        />
        <BodyText primary content={"Or"} style={styles.Divider} />
        <CustomButton
          secondary
          title="Sign in with Google"
          onPress={() => console.log("Google auth")}
          icon={
            <AntDesign
              name="google"
              size={24}
              color={color.background}
              style={styles.icon}
            />
          }
          iconPosition="left"
        />
        <View style={styles.navigation}>
          <BodyText primary content="Don't have an account yet?" />
          <Pressable onPress={() => navigate(REGISTER)}>
            <BodyText secondary content="Create a new account" />
          </Pressable>
          <BodyText
            primary
            content="And don't miss out of the deliciouness that you deserve!"
          />
        </View>
      </View>
    </Container>
  );
};

export default Index;
