import { View, TouchableOpacity, Image } from "react-native";
import React from "react";

import { Entypo } from "@expo/vector-icons";

import styles from "./styles";
import Container from "../common/Container";
import BodyText from "../common/Text/BodyText";
import color from "../../assets/theme/color";

const Index = () => {
  return (
    <Container style={styles.wrapper}>
      <Entypo
        name="menu"
        size={24}
        color={color.secondary}
        style={styles.icon}
      />
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={() => console.log("hello")}
      >
        <View style={styles.location}>
          <Entypo name="location-pin" size={20} color={color.primary} />
          <BodyText secondary content="LOCATION" />
        </View>
        <BodyText primary content="The Hyde Park" />
      </TouchableOpacity>
      <Image
        source={{ uri: "https://wallpaperaccess.com/full/3694562.png" }}
        style={styles.avatar}
      />
    </Container>
  );
};

export default Index;
