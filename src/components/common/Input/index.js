import React from "react";
import { View, Text, TextInput } from "react-native";
import color from "../../../assets/theme/color";
import styles from "./styles";

const Input = ({
  onChangeText,
  iconPosition,
  icon,
  style,
  borderStyle,
  inputStyle,
  value,
  label,
  error,
  ...props
}) => {
  const [focused, setFocused] = React.useState(false);

  const getFlexDirection = () => {
    if (icon && iconPosition) {
      if (iconPosition === "left") {
        return "row";
      } else if (iconPosition === "right") {
        return "row-reverse";
      }
    }
  };

  const getBorderColor = () => {
    if (error) {
      return color.danger;
    }

    if (focused) {
      return color.primary;
    } else {
      return color.secondary;
    }
  };
  return (
    <View style={[styles.inputContainer, style]}>
      {label && <Text style={styles.label}>{label}</Text>}

      <View
        style={[
          styles.wrapper,
          { alignItems: icon ? "center" : "baseline" },
          { borderColor: getBorderColor(), flexDirection: getFlexDirection() },
          borderStyle,
        ]}
      >
        <View>{icon && icon}</View>

        <TextInput
          style={[styles.textInput, inputStyle]}
          onChangeText={onChangeText}
          value={value}
          selectionColor={color.primary}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          {...props}
        />
      </View>

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default Input;
