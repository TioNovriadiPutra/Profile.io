import { StyleSheet, ImageBackground, View, Text } from "react-native";
import React from "react";
import { PORTO_LOCAL_DRIVE } from "../../../utils/config/Endpoint";
import { LinearGradient } from "expo-linear-gradient";
import { useRecoilValue } from "recoil";
import { navState } from "../../../store/NavState";
import ProfileIoPortoButton from "../../atoms/ProfileIoPortoButton";
import { Fonts } from "../../../themes/Fonts";
import { Colors } from "../../../themes/Colors";

const ShowPortoHeader = ({ previous, data }) => {
  const nav = useRecoilValue(navState);

  return (
    <ImageBackground
      source={{ uri: PORTO_LOCAL_DRIVE + data.thumbnail }}
      style={styles.header}
    >
      <LinearGradient
        style={styles.gradient}
        colors={["transparent", "rgba(0,0,0,0.35)"]}
      >
        <View style={styles.headerButton}>
          <ProfileIoPortoButton
            icon={require("../../../assets/image/backWhite.png")}
            onPress={() => nav.navigate(previous)}
          />

          <View style={styles.leftButton}>
            <ProfileIoPortoButton
              icon={require("../../../assets/image/share.png")}
            />
            <ProfileIoPortoButton
              icon={require("../../../assets/image/editTransparent.png")}
              onPress={() =>
                nav.navigate("EditPorto", {
                  dataPorto: data,
                  previousPorto: previous,
                })
              }
            />
          </View>
        </View>

        <View>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.subTitle}>{data.sub_title}</Text>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

export default ShowPortoHeader;

const styles = StyleSheet.create({
  header: {
    height: 360,
  },
  gradient: {
    flex: 1,
    paddingHorizontal: 18,
    justifyContent: "space-between",
    paddingTop: 30,
    paddingBottom: 19,
  },
  headerButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontFamily: Fonts.Bold,
    fontSize: 20,
    color: Colors.White,
  },
  subTitle: {
    fontFamily: Fonts.Medium,
    fontSize: 14,
    color: Colors.Orange,
  },
});
