import React from "react";
import { Image, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as mime from "react-native-mime-types";

const ProfileIoFeedsVideoPicker = ({ field }) => {
  const pickVideo = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Videos,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      field.onChange({
        uri: result.assets[0].uri,
        name: result.assets[0].uri.split("/").pop(),
        type: mime.lookup(result.assets[0].uri.split("/").pop()),
      });
    }
  };

  return (
    <TouchableOpacity onPress={pickVideo}>
      <Image source={require("../../assets/image/pickVideo.png")} />
    </TouchableOpacity>
  );
};

export default ProfileIoFeedsVideoPicker;
