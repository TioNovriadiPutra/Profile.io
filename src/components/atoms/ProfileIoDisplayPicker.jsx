import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useController } from "react-hook-form";
import { LOCAL_DRIVE } from "../../utils/config/Endpoint";
import { Colors } from "../../themes/Colors";
import * as ImagePicker from "expo-image-picker";
import * as mime from "react-native-mime-types";

const ProfileIoDisplayPicker = ({
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
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={pickImage}>
        <Image
          source={
            field.value === null
              ? placeholder
              : field.value === defaultValue
              ? { uri: LOCAL_DRIVE + field.value }
              : { uri: field.value.uri }
          }
          style={styles.imgBtn}
        />

        <View style={styles.firstCircle}>
          <View style={styles.secondCircle}>
            <Image source={require("../../assets/image/edit.png")} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileIoDisplayPicker;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 32,
  },
  btn: {
    width: 84,
    height: 84,
    borderRadius: 50,
  },
  imgBtn: {
    width: 84,
    height: 84,
    borderRadius: 50,
    resizeMode: "contain",
  },
  firstCircle: {
    width: 34,
    height: 34,
    borderRadius: 50,
    backgroundColor: Colors.White,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    top: "70%",
    left: "65%",
  },
  secondCircle: {
    width: 24,
    height: 24,
    borderRadius: 50,
    backgroundColor: Colors.Green,
    justifyContent: "center",
    alignItems: "center",
  },
});
