import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../../themes/Colors";
import { Fonts } from "../../themes/Fonts";

const ProfileIoStatNum = ({ num, label }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.num}>{num}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

export default ProfileIoStatNum;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1.6,
    borderColor: Colors.Border,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  num: {
    fontFamily: Fonts.Medium,
    fontSize: 18,
    color: Colors.Black,
  },
  label: {
    fontFamily: Fonts.Regular,
    fontSize: 14,
    color: Colors.LightGrey,
  },
});
