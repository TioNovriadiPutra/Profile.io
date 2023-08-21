import { StyleSheet, View } from "react-native";
import React from "react";
import { Colors } from "../../themes/Colors";
import { useController } from "react-hook-form";
import { TextInput } from "react-native";
import { Fonts } from "../../themes/Fonts";

const ProfileIoSearchInput = ({ control, onSubmit }) => {
  const { field } = useController({
    name: "search",
    defaultValue: "",
    control,
  });

  return (
    <View style={styles.container}>
      <TextInput
        value={field.value}
        placeholder="Search someone here"
        placeholderTextColor={Colors.Placeholder}
        onChangeText={field.onChange}
        style={styles.input}
        onSubmitEditing={onSubmit}
      />
    </View>
  );
};

export default ProfileIoSearchInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1.5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 40,
    borderColor: Colors.Border,
  },
  input: {
    fontFamily: Fonts.Regular,
    fontSize: 14,
    color: Colors.Black,
  },
});
