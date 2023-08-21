import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { LOCAL_DRIVE } from "../../utils/config/Endpoint";
import { Fonts } from "../../themes/Fonts";
import { Colors } from "../../themes/Colors";
import moment from "moment/moment";
import { useRecoilValue } from "recoil";
import { navState } from "../../store/NavState";

const ProfileIoAccountFeeds = ({
  dataId,
  displayPic,
  name,
  status,
  time,
  isAccount,
}) => {
  const nav = useRecoilValue(navState);

  return (
    <TouchableOpacity
      style={styles.container}
      disabled={isAccount}
      onPress={() =>
        nav.navigate("OtherAccount", {
          dataId,
        })
      }
    >
      <Image
        source={
          displayPic === null
            ? require("../../assets/image/profilePic.png")
            : { uri: LOCAL_DRIVE + displayPic }
        }
        style={styles.displayPic}
      />

      <View style={styles.desc}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.status}>{status}</Text>
      </View>

      {time !== null && (
        <Text style={styles.time}>{moment(time).fromNow()}</Text>
      )}
    </TouchableOpacity>
  );
};

export default ProfileIoAccountFeeds;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  displayPic: {
    borderRadius: 50,
    marginRight: 12,
    width: 48,
    height: 48,
  },
  name: {
    fontFamily: Fonts.SemiBold,
    fontSize: 14,
    color: Colors.Black,
  },
  status: {
    fontFamily: Fonts.Regular,
    fontSize: 12,
    color: Colors.Grey,
  },
  desc: {
    flex: 1,
  },
  time: {
    fontFamily: Fonts.Regular,
    fontSize: 12,
    color: Colors.Grey,
  },
});
