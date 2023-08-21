import { View, StyleSheet } from "react-native";
import React from "react";
import ProfileIoCVSliderButton from "../atoms/ProfileIoCVSliderButton";
import { Colors } from "../../themes/Colors";

const ProfileIoCVSlider = ({ pageRef }) => {
  return (
    <View style={styles.container}>
      <ProfileIoCVSliderButton
        pageNum={0}
        pageRef={pageRef}
        btnLabel={"Skills"}
      />
      <ProfileIoCVSliderButton
        pageNum={1}
        pageRef={pageRef}
        btnLabel={"Portfolios"}
      />
    </View>
  );
};

export default ProfileIoCVSlider;

const styles = StyleSheet.create({
  container: {
    height: 38,
    position: "absolute",
    left: 14,
    right: 14,
    bottom: 74,
    flexDirection: "row",
    backgroundColor: Colors.White,
    borderRadius: 20,
  },
});
