import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Fonts } from "../../themes/Fonts";
import { Colors } from "../../themes/Colors";
import { useRecoilValue } from "recoil";
import { navState } from "../../store/NavState";

const ProfileIoPortoDesc = ({ link, desc }) => {
  const nav = useRecoilValue(navState);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Link :</Text>
      <TouchableOpacity
        onPress={() => {
          if (link !== null) {
            nav.navigate("PortoWebView", {
              link: link,
            });
          }
        }}
        style={styles.btnLink}
      >
        <Text style={styles.link}>{link === null ? "-" : link}</Text>
      </TouchableOpacity>

      <Text style={styles.descTitle}>Description</Text>
      <Text style={styles.desc}>{desc === null ? "-" : desc}</Text>
    </View>
  );
};

export default ProfileIoPortoDesc;

const styles = StyleSheet.create({
  container: {
    padding: 18,
  },
  title: {
    fontFamily: Fonts.Bold,
    fontSize: 12,
    color: Colors.Placeholder,
  },
  link: {
    fontFamily: Fonts.Medium,
    fontSize: 12,
    color: Colors.DarkGreen,
  },
  descTitle: {
    fontFamily: Fonts.SemiBold,
    fontSize: 15,
    color: Colors.Black,
    marginTop: 18,
  },
  desc: {
    fontFamily: Fonts.Regular,
    fontSize: 12,
    color: Colors.Black,
  },
  btnLink: {
    alignSelf: "flex-start",
  },
});
