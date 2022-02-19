import { View, Text, Image } from "react-native";
import React from "react";

import { scale } from "react-native-size-matters";

import styles from "./styles";

const HeroComponent = () => {
  return (
    <View style={styles.wrapper}>
      <Image
        source={require("../../assets/images/Brand.png")}
        style={styles.logo}
      />
    </View>
  );
};

export default HeroComponent;
