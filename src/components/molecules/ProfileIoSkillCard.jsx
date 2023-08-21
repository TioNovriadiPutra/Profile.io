import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../themes/Colors";
import { SUB_SPECIALITY_LOCAL_DRIVE } from "../../utils/config/Endpoint";
import { Fonts } from "../../themes/Fonts";
import Stars from "react-native-stars";
import { useRecoilValue } from "recoil";
import { navState } from "../../store/NavState";

const ProfileIoSkillCard = ({ data }) => {
  const nav = useRecoilValue(navState);

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: data.subSpeciality.color }]}
      onPress={() =>
        nav.navigate("ShowSkill", {
          dataSkill: data,
        })
      }
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: SUB_SPECIALITY_LOCAL_DRIVE + data.subSpeciality.logo }}
          style={styles.logo}
        />
      </View>

      <Text style={styles.name}>{data.subSpeciality.label}</Text>

      <Text style={styles.year}>
        {data.year_exp === 0
          ? "< 1 Year Experience"
          : `${data.year_exp} Year Experience`}
      </Text>

      <Stars
        display={
          data.level === "Beginner"
            ? data.score / 100
            : data.level === "Intermediate"
            ? data.score / 100 + 1
            : data.score / 100 + 2
        }
        spacing={16}
        count={3}
        starSize={23}
        fullStar={require("../../assets/image/star.png")}
        emptyStar={require("../../assets/image/emptyStar.png")}
        disabled={true}
      />

      <Text style={styles.level}>{data.level}</Text>
    </TouchableOpacity>
  );
};

export default ProfileIoSkillCard;

const styles = StyleSheet.create({
  container: {
    width: 198.47,
    height: 240,
    borderRadius: 10,
    paddingHorizontal: 19,
    paddingTop: 19,
    paddingBottom: 6,
  },
  imageContainer: {
    width: 70.77,
    height: 74.4,
    borderRadius: 10,
    backgroundColor: Colors.White,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 58.98,
    height: 54.25,
    resizeMode: "contain",
  },
  name: {
    fontFamily: Fonts.SemiBold,
    fontSize: 24,
    color: Colors.White,
    marginTop: 6.6,
  },
  year: {
    fontFamily: Fonts.Medium,
    fontSize: 14,
    color: Colors.White,
    marginBottom: 9.53,
  },
  level: {
    fontFamily: Fonts.SemiBold,
    fontSize: 14,
    color: Colors.White,
    textAlign: "center",
    marginTop: 9.49,
  },
});
