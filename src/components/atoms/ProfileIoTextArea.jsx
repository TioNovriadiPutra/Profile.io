import { View, TextInput, StyleSheet } from "react-native";
import React from "react";
import { useController } from "react-hook-form";
import { Colors } from "../../themes/Colors";
import { Fonts } from "../../themes/Fonts";

const ProfileIoTextArea = ({
  name,
  defaultValue,
  control,
  placeholder,
  withBorder,
}) => {
  const { field } = useController({
    name,
    defaultValue,
    control,
  });

  return (
    <View
      style={[
        styles.container,
        withBorder === true && {
          borderWidth: 1.5,
          borderColor: Colors.Border,
        },
      ]}
    >
      <TextInput
        value={field.value}
        placeholder={placeholder}
        placeholderTextColor={Colors.Placeholder}
        onChangeText={field.onChange}
        style={styles.input}
        multiline
      />
    </View>
  );
};

export default ProfileIoTextArea;

const styles = StyleSheet.create({
  container: {
    height: 250,
    marginTop: 22,
    borderRadius: 10,
    paddingHorizontal: 18,
    paddingTop: 13,
  },
  input: {
    fontFamily: Fonts.Regular,
    fontSize: 14,
    color: Colors.Black,
    maxHeight: 300,
  },
});
