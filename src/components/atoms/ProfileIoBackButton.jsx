import React from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";

const ProfileIoBackButton = ({ white = false, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={
          white === true
            ? require("../../assets/image/backWhite.png")
            : require("../../assets/image/back.png")
        }
      />
    </TouchableOpacity>
  );
};

export default ProfileIoBackButton;
