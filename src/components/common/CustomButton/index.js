import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import React from "react";

import styles from "./styles";
import color from "../../../assets/theme/color";

const CustomButton = ({
  title,
  secondary,
  primary,
  danger,
  disabled,
  loading,
  onPress,
  style,
  textStyle,
  icon,
}) => {
  const getBgColor = () => {
    if (disabled) {
      return color.disabled;
    }
    if (primary) {
      return color.primary;
    }
    if (secondary) {
      return color.secondary;
    }
  };

  const getTextColor = () => {
    if (primary) {
      return color.text.primary;
    }
    if (secondary) {
      return color.text.black;
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
          <View style={styles.button}>
            {icon && icon}
            <Text style={[styles.text, { color: getTextColor() }, textStyle]}>
              {title}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

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
      return color.secondary;
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
      return color.text.black;
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.floatWrapper,
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

export { CustomButton, CustomFloatingButton };
