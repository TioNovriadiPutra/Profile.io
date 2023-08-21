import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useController } from "react-hook-form";
import { Fonts } from "../../themes/Fonts";
import { Colors } from "../../themes/Colors";
import { Switch } from "react-native-paper";

const ProfileIoSwitch = ({ name, defaultValue, control, label }) => {
  const { field } = useController({
    name,
    defaultValue,
    control,
  });

  const onToggleSwitch = () => field.onChange(!field.value);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <Switch
        value={field.value}
        onValueChange={onToggleSwitch}
        color={Colors.Green}
      />
    </View>
  );
};

export default ProfileIoSwitch;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 22,
    paddingHorizontal: 6,
    justifyContent: "space-between",
  },
  label: {
    fontFamily: Fonts.Medium,
    fontSize: 14,
    color: Colors.Black,
  },
});
