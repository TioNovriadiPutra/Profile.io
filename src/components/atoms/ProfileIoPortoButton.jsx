import { TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../../themes/Colors";

const ProfileIoPortoButton = ({ icon, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={icon} />
    </TouchableOpacity>
  );
};

export default ProfileIoPortoButton;

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: Colors.DarkGreen,
    opacity: 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
});
