import { View, StyleSheet, Image } from "react-native";
import React from "react";
import { useController } from "react-hook-form";
import { Colors } from "../../../themes/Colors";
import ProfileIoFeedsImagePicker from "../../atoms/ProfileIoFeedsImagePicker";
import ProfileIoFeedsVideoPicker from "../../atoms/ProfileIoFeedsVideoPicker";
import { Video, ResizeMode } from "expo-av";

const CreateFeedsFooter = ({ control }) => {
  const { field } = useController({
    name: "assetUrl",
    defaultValue: null,
    control,
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.assetContainer}>
        {field.value === null ? null : field.value.type.includes("image") ? (
          <Image source={{ uri: field.value.uri }} style={styles.asset} />
        ) : (
          <Video
            source={{
              uri: field.value.uri,
            }}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            style={styles.asset}
          />
        )}
      </View>
      <View style={styles.container}>
        <ProfileIoFeedsImagePicker field={field} />
        <ProfileIoFeedsVideoPicker field={field} />
      </View>
    </View>
  );
};

export default CreateFeedsFooter;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.White,
  },
  container: {
    flexDirection: "row",
    paddingVertical: 11,
    paddingHorizontal: 29,
    borderTopWidth: 1,
    borderColor: Colors.Border,
    gap: 12,
  },
  assetContainer: {
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 12,
  },
  asset: {
    width: "100%",
    height: 250,
    borderRadius: 14,
    resizeMode: "cover",
  },
});
