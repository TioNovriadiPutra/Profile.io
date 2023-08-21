import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useRecoilState } from "recoil";
import { sliderPage } from "../../store/AccountSliderState";
import { Colors } from "../../themes/Colors";

const ProfileIoAccountSliderButton = ({
  imageActive,
  imageInactive,
  pageNum,
  pageRef,
}) => {
  const [slider, setSlider] = useRecoilState(sliderPage);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          setSlider(pageNum);
          pageRef.current.scrollToIndex({ animation: true, index: pageNum });
        }}
      >
        <Image source={slider === pageNum ? imageActive : imageInactive} />

        <View
          style={[
            styles.line,
            { backgroundColor: slider === pageNum ? Colors.Green : null },
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileIoAccountSliderButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 12,
  },
  btn: {
    justifyContent: "space-between",
    height: "100%",
  },
  line: {
    height: 2,
    borderRadius: 8,
  },
});
