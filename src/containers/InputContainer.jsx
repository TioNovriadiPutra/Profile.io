import { View } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Colors } from "../themes/Colors";
import { TouchableOpacity } from "react-native";

const InputContainer = ({ children, touch = false, onPress }) => {
  if (touch === false) {
    return <View style={styles.container}>{children}</View>;
  } else {
    return (
      <TouchableOpacity style={styles.container} onPress={onPress}>
        {children}
      </TouchableOpacity>
    );
  }
};

export default InputContainer;

const styles = StyleSheet.create({
  container: {
    height: 47,
    borderColor: Colors.Border,
    borderWidth: 1.5,
    borderRadius: 10,
    justifyContent: "center",
    paddingHorizontal: 18,
    marginTop: 22,
  },
});
