import { Text } from "react-native";
import React from "react";

import styles from "./styles";
import color from "../../../../assets/theme/color";

const Title = ({ primary, secondary, title, style }) => {
  const getTextColor = () => {
    // if (disabled) {
    //   return colors.grey;
    // }
    if (primary) {
      return color.text.primary;
    }
    if (secondary) {
      return color.text.secondary;
    }
  };

  return (
    <Text style={[styles.title, { color: getTextColor() }, style]}>
      {title}
    </Text>
  );
};

export default Title;
