import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRecoilState } from "recoil";
import { sliderPageCV } from "../../store/CVSliderState";
import { Colors } from "../../themes/Colors";
import { Fonts } from "../../themes/Fonts";

const ProfileIoCVSliderButton = ({ pageNum, pageRef, btnLabel }) => {
  const [slider, setSlider] = useRecoilState(sliderPageCV);

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: slider === pageNum ? Colors.Orange : Colors.White },
      ]}
      onPress={() => {
        setSlider(pageNum);
        pageRef.current.scrollToIndex({ animation: true, index: pageNum });
      }}
    >
      <Text
        style={[
          styles.label,
          { color: slider === pageNum ? Colors.White : Colors.Grey },
        ]}
      >
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
};

export default ProfileIoCVSliderButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  label: {
    fontFamily: Fonts.Medium,
    fontSize: 14,
  },
});
