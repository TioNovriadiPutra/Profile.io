import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { Fonts } from "../../themes/Fonts";
import { Colors } from "../../themes/Colors";
import { useController } from "react-hook-form";
import * as ImagePicker from "expo-image-picker";
import * as mime from "react-native-mime-types";
import { PORTO_LOCAL_DRIVE } from "../../utils/config/Endpoint";

const ProfileIoMediaGalleryPicker = ({ name, defaultValue, control }) => {
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
      let data = field.value;
      data.push({
        uri: result.assets[0].uri,
        name: result.assets[0].uri.split("/").pop(),
        type: mime.lookup(result.assets[0].uri.split("/").pop()),
      });
      field.onChange(data);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add media gallery</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.btn} onPress={pickImage}>
          <Image
            source={require("../../assets/image/camera.png")}
            style={styles.image}
          />
        </TouchableOpacity>

        <FlatList
          data={field.value}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ gap: 10 }}
          renderItem={({ item }) =>
            item.uri ? (
              <Image
                source={{
                  uri: item.uri,
                }}
                style={styles.imageGallery}
              />
            ) : (
              <Image
                source={{
                  uri: PORTO_LOCAL_DRIVE + item.url,
                }}
                style={styles.imageGallery}
              />
            )
          }
        />
      </View>
    </View>
  );
};

export default ProfileIoMediaGalleryPicker;

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
  },
  title: {
    fontFamily: Fonts.Medium,
    fontSize: 14,
    color: Colors.Black,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 8,
    marginBottom: 20,
  },
  btn: {
    width: 80,
    height: 80,
    borderWidth: 3,
    borderColor: Colors.Placeholder,
    borderRadius: 8,
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  image: {
    width: 32,
    height: 32,
  },
  imageGallery: {
    width: 80,
    height: 80,
    borderRadius: 8,
    resizeMode: "contain",
  },
});
