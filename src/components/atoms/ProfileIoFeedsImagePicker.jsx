import { TouchableOpacity, Image } from "react-native";
import React from "react";
import * as ImagePicker from "expo-image-picker";
import * as mime from "react-native-mime-types";

const ProfileIoFeedsImagePicker = ({ field }) => {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
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
    <TouchableOpacity onPress={pickImage}>
      <Image source={require("../../assets/image/pickImage.png")} />
    </TouchableOpacity>
  );
};

export default ProfileIoFeedsImagePicker;
