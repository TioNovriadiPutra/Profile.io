import { View, StyleSheet } from "react-native";
import React from "react";
import ProfileIoAccountSliderButton from "../atoms/ProfileIoAccountSliderButton";

const ProfileIoAccountSlider = ({ pageRef }) => {
  return (
    <View style={styles.container}>
      <ProfileIoAccountSliderButton
        imageActive={require("../../assets/image/feedsActive.png")}
        imageInactive={require("../../assets/image/feedsInactive.png")}
        pageNum={0}
        pageRef={pageRef}
      />
      <ProfileIoAccountSliderButton
        imageActive={require("../../assets/image/portoActive.png")}
        imageInactive={require("../../assets/image/portoInactive.png")}
        pageNum={1}
        pageRef={pageRef}
      />
    </View>
  );
};

export default ProfileIoAccountSlider;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 48,
  },
});
