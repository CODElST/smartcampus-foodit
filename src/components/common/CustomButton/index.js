import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";

import styles from "./styles";
import color from "../../../assets/theme/color";

const CustomFloatingButton = ({
  title,
  secondary,
  primary,
  danger,
  disabled,
  loading,
  onPress,
  style,
  textStyle,
}) => {
  const getBgColor = () => {
    // if (disabled) {
    //   return colors.grey;
    // }
    if (primary) {
      return color.primary;
    }
    if (secondary) {
      return color.button.white;
    }
  };

  const getTextColor = () => {
    // if (disabled) {
    //   return colors.grey;
    // }
    if (primary) {
      return color.text.primary;
    }
    if (secondary) {
      return color.text.primary;
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.wrapper,
        { backgroundColor: getBgColor(), paddingVertical: loading ? 0 : 11 },
        style,
      ]}
    >
      <View>
        {loading ? (
          <ActivityIndicator color={color.primary} style={styles.loader} />
        ) : (
          <Text style={[styles.text, { color: getTextColor() }, textStyle]}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomFloatingButton;
