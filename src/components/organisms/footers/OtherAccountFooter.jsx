import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../../../themes/Colors";
import { Fonts } from "../../../themes/Fonts";
import { useRecoilValue } from "recoil";
import { navState } from "../../../store/NavState";

const OtherAccountFooter = ({ dataId }) => {
  const nav = useRecoilValue(navState);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        nav.navigate("OtherCV", {
          dataId,
        })
      }
    >
      <Text style={styles.label}>Skill Card</Text>
    </TouchableOpacity>
  );
};

export default OtherAccountFooter;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: 124,
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.Orange,
    bottom: 20,
    alignSelf: "center",
    borderRadius: 20,
  },
  label: {
    fontFamily: Fonts.SemiBold,
    fontSize: 14,
    color: Colors.White,
  },
});
