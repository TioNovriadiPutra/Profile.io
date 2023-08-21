import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React from "react";
import { Fonts } from "../../themes/Fonts";
import { Colors } from "../../themes/Colors";
import { PORTO_LOCAL_DRIVE } from "../../utils/config/Endpoint";

const ProfileIoPortoGallery = ({ gallery }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gallery</Text>

      <FlatList
        data={gallery}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: PORTO_LOCAL_DRIVE + item.url }}
              style={styles.image}
            />
          </View>
        )}
      />
    </View>
  );
};

export default ProfileIoPortoGallery;

const styles = StyleSheet.create({
  container: {
    marginLeft: 18,
    marginBottom: 32,
  },
  title: {
    fontFamily: Fonts.SemiBold,
    fontSize: 15,
    color: Colors.Black,
    marginBottom: 12,
  },

  list: {
    paddingRight: 18,
    gap: 10,
  },
  imageContainer: {
    width: 186,
    height: 136,
    borderRadius: 10,
    backgroundColor: Colors.White,
    elevation: 5,
    marginBottom: 10,
  },
  image: {
    width: 186,
    height: 136,
    borderRadius: 10,
    resizeMode: "contain",
  },
});
