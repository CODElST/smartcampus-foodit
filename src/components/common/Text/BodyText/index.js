import { View, Text } from "react-native";
import React from "react";

import styles from "./styles";
import color from "../../../../assets/theme/color";

const BodyText = ({ primary, secondary, content, style, disabled }) => {
  const getTextColor = () => {
    if (disabled) {
      return color.disabled;
    }
    if (primary) {
      return color.text.primary;
    }
    if (secondary) {
      return color.text.secondary;
    }
  };

  return (
    <Text style={[styles.title, { color: getTextColor() }, style]}>
      {content}
    </Text>
  );
};

export default BodyText;
