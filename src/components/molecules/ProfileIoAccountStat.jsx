import { View, StyleSheet } from "react-native";
import React from "react";
import ProfileIoStatNum from "../atoms/ProfileIoStatNum";

const ProfileIoAccountStat = ({ data }) => {
  const calculateLike = () => {
    let totalLike = 0;
    for (let i = 0; i < data.feeds.length; i++) {
      totalLike += data.feeds[i].likes.length;
    }

    return totalLike;
  };

  return (
    <View style={styles.container}>
      <ProfileIoStatNum num={data.feeds.length} label={"Posts"} />
      <ProfileIoStatNum num={data.following.length} label={"Relations"} />
      <ProfileIoStatNum num={calculateLike()} label={"Likes"} />
    </View>
  );
};

export default ProfileIoAccountStat;

const styles = StyleSheet.create({
  container: {
    height: 64,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 13,
    marginTop: 23,
  },
});
