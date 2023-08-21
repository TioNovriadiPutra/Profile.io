import React from "react";
import { StyleSheet } from "react-native";
import { Colors } from "../../themes/Colors";
import { TextInput } from "react-native";
import { useController } from "react-hook-form";
import { Fonts } from "../../themes/Fonts";
import InputContainer from "../../containers/InputContainer";

const ProfileIoTextInput = ({
  name,
  defaultValue,
  control,
  placeholder,
  secure = false,
}) => {
  const { field } = useController({
    name,
    defaultValue,
    control,
  });

  return (
    <InputContainer>
      <TextInput
        value={field.value}
        placeholder={placeholder}
        placeholderTextColor={Colors.Placeholder}
        onChangeText={field.onChange}
        secureTextEntry={secure}
        style={styles.input}
      />
    </InputContainer>
  );
};

export default ProfileIoTextInput;

const styles = StyleSheet.create({
  input: {
    fontFamily: Fonts.Regular,
    fontSize: 14,
    color: Colors.Black,
  },
});
