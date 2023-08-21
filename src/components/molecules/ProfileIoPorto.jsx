import { Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../themes/Colors";
import { PORTO_LOCAL_DRIVE } from "../../utils/config/Endpoint";
import { Fonts } from "../../themes/Fonts";
import { useRecoilValue } from "recoil";
import { navState } from "../../store/NavState";

const ProfileIoPorto = ({ item, cv }) => {
  const nav = useRecoilValue(navState);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        nav.navigate("ShowPorto", {
          data: item,
          previous: cv === true ? "CV" : "Account",
        })
      }
    >
      <Image
        source={{ uri: PORTO_LOCAL_DRIVE + item.thumbnail }}
        style={styles.thumbnail}
      />

      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.subTitle}>{item.sub_title}</Text>
    </TouchableOpacity>
  );
};

export default ProfileIoPorto;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    paddingHorizontal: 24,
    paddingVertical: 18,
    borderRadius: 14,
  },
  thumbnail: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    borderRadius: 10,
  },
  title: {
    fontFamily: Fonts.SemiBold,
    fontSize: 15,
    color: Colors.Black,
    marginTop: 14,
  },
  subTitle: {
    fontFamily: Fonts.Regular,
    fontSize: 14,
    color: Colors.Grey,
  },
});
