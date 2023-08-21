import { Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useController } from "react-hook-form";
import { Colors } from "../../themes/Colors";
import * as ImagePicker from "expo-image-picker";
import * as mime from "react-native-mime-types";
import { PORTO_LOCAL_DRIVE } from "../../utils/config/Endpoint";

const ProfileIoThumbnailPicker = ({
  name,
  defaultValue,
  control,
  placeholder,
}) => {
  const { field } = useController({
    name,
    defaultValue,
    control,
  });

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
    <TouchableOpacity
      style={[styles.container, { borderWidth: field.value === null ? 3 : 0 }]}
      onPress={pickImage}
    >
      <Image
        source={
          field.value === null
            ? placeholder
            : defaultValue !== null && defaultValue === field.value
            ? { uri: PORTO_LOCAL_DRIVE + defaultValue }
            : { uri: field.value.uri }
        }
        style={field.value !== null ? styles.image : null}
      />
    </TouchableOpacity>
  );
};

export default ProfileIoThumbnailPicker;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 275,
    borderRadius: 18,
    borderStyle: "dashed",
    borderColor: Colors.Placeholder,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 275,
    borderRadius: 18,
    resizeMode: "cover",
  },
});
