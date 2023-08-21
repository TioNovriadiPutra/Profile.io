import { View } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Colors } from "../../themes/Colors";
import { FlatList } from "react-native";
import ProfileIoTextInput from "../atoms/ProfileIoTextInput";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { Fonts } from "../../themes/Fonts";
import ProfileIoDropdown from "../atoms/ProfileIoDropdown";
import ProfileIoDatePicker from "../atoms/ProfileIoDatePicker";
import ProfileIoDisplayPicker from "../atoms/ProfileIoDisplayPicker";
import ProfileIoTextArea from "../atoms/ProfileIoTextArea";
import ProfileIoThumbnailPicker from "../atoms/ProfileIoThumbnailPicker";
import ProfileIoSwitch from "../atoms/ProfileIoSwitch";
import ProfileIoMediaGalleryPicker from "../atoms/ProfileIoMediaGalleryPicker";

const ProfileIoForm = ({
  dataInput,
  control,
  withSubmit = true,
  btnLabel = "Login",
  onPress,
  scrollEnable = true,
}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={dataInput}
        showsVerticalScrollIndicator={false}
        scrollEnabled={scrollEnable}
        renderItem={({ item }) => {
          if (item.type === "text") {
            return (
              <ProfileIoTextInput
                name={item.name}
                defaultValue={item.defaultValue}
                control={control}
                placeholder={item.placeholder}
              />
            );
          } else if (item.type === "password") {
            return (
              <ProfileIoTextInput
                name={item.name}
                defaultValue={item.defaultValue}
                control={control}
                placeholder={item.placeholder}
                secure
              />
            );
          } else if (item.type === "dropdown") {
            return (
              <ProfileIoDropdown
                name={item.name}
                defaultValue={item.defaultValue}
                control={control}
                placeholder={item.placeholder}
                dataDropdown={item.dataDropdown}
                title={item.title}
                customPress={item.customPress}
              />
            );
          } else if (item.type === "date") {
            return (
              <ProfileIoDatePicker
                name={item.name}
                defaultValue={item.defaultValue}
                control={control}
                placeholder={item.placeholder}
              />
            );
          } else if (item.type === "display") {
            return (
              <ProfileIoDisplayPicker
                name={item.name}
                defaultValue={item.defaultValue}
                control={control}
                placeholder={item.placeholder}
              />
            );
          } else if (item.type === "textarea") {
            return (
              <ProfileIoTextArea
                name={item.name}
                defaultValue={item.defaultValue}
                control={control}
                placeholder={item.placeholder}
                withBorder={item.withBorder}
              />
            );
          } else if (item.type === "thumbnail") {
            return (
              <ProfileIoThumbnailPicker
                name={item.name}
                defaultValue={item.defaultValue}
                control={control}
                placeholder={item.placeholder}
              />
            );
          } else if (item.type === "switch") {
            return (
              <ProfileIoSwitch
                name={item.name}
                defaultValue={item.defaultValue}
                control={control}
                label={item.label}
              />
            );
          } else if (item.type === "gallery") {
            return (
              <ProfileIoMediaGalleryPicker
                name={item.name}
                defaultValue={item.defaultValue}
                control={control}
              />
            );
          }
        }}
      />

      {withSubmit === true && (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
          <Text style={styles.btnLabel}>{btnLabel}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ProfileIoForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 8,
    paddingHorizontal: 24,
    paddingTop: 30,
  },
  btn: {
    height: 47,
    borderRadius: 10,
    backgroundColor: Colors.Orange,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 46,
  },
  btnLabel: {
    fontFamily: Fonts.SemiBold,
    fontSize: 19,
    color: Colors.White,
  },
});
