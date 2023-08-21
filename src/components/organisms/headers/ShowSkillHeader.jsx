import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "../../../themes/Colors";
import ProfileIoBackButton from "../../atoms/ProfileIoBackButton";
import { useRecoilValue } from "recoil";
import { navState } from "../../../store/NavState";
import { Fonts } from "../../../themes/Fonts";
import Stars from "react-native-stars";

const ShowSkillHeader = ({ title, score }) => {
  const nav = useRecoilValue(navState);

  return (
    <View style={styles.container}>
      <ProfileIoBackButton white onPress={() => nav.navigate("CV")} />

      <Text style={styles.title}>{title}</Text>

      <Stars
        display={score}
        spacing={16}
        count={3}
        starSize={23}
        fullStar={require("../../../assets/image/star.png")}
        emptyStar={require("../../../assets/image/emptyStar.png")}
        disabled={true}
      />
    </View>
  );
};

export default ShowSkillHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    backgroundColor: Colors.Green,
    paddingTop: 24,
    paddingBottom: 34,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    fontFamily: Fonts.AppleTea,
    fontSize: 24,
    color: Colors.White,
    textAlign: "center",
    marginTop: 29,
    marginBottom: 19,
  },
});
