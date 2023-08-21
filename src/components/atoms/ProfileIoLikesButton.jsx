import { Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useContext } from "react";
import { Fonts } from "../../themes/Fonts";
import { Colors } from "../../themes/Colors";
import { AuthContext } from "../../utils/context/AuthContext";

const ProfileIoLikesButton = ({ likesNum, feedsUserId, active, onPress }) => {
  const { userId } = useContext(AuthContext);

  return (
    <TouchableOpacity
      style={styles.btn}
      disabled={feedsUserId === userId ? true : false}
      onPress={onPress}
    >
      <Image
        source={
          active === true
            ? require("../../assets/image/likesActive.png")
            : require("../../assets/image/likes.png")
        }
      />

      <Text style={styles.desc}>{likesNum}</Text>
    </TouchableOpacity>
  );
};

export default ProfileIoLikesButton;

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  desc: {
    fontFamily: Fonts.Regular,
    fontSize: 12,
    color: Colors.Grey,
  },
});
