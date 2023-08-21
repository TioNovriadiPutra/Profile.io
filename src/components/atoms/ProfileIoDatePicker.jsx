import { Text } from "react-native";
import React, { useState } from "react";
import InputContainer from "../../containers/InputContainer";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useController } from "react-hook-form";
import { StyleSheet } from "react-native";
import { Fonts } from "../../themes/Fonts";
import { Colors } from "../../themes/Colors";

const ProfileIoDatePicker = ({ name, defaultValue, control, placeholder }) => {
  const { field } = useController({
    name,
    defaultValue,
    control,
  });

  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState(new Date());

  const onChangeDate = (event, selectedDate) => {
    setShowModal(false);
    setDate(selectedDate);
    field.onChange(selectedDate);
  };

  return (
    <InputContainer touch onPress={() => setShowModal(true)}>
      <Text
        style={[
          styles.placeholder,
          {
            color: field.value === null ? Colors.Placeholder : Colors.Black,
          },
        ]}
      >
        {field.value === null
          ? placeholder
          : field.value.toISOString().substring(0, 10)}
      </Text>

      {showModal && (
        <DateTimePicker
          value={date}
          mode="date"
          is24Hour={true}
          onChange={onChangeDate}
        />
      )}
    </InputContainer>
  );
};

export default ProfileIoDatePicker;

const styles = StyleSheet.create({
  placeholder: {
    fontFamily: Fonts.Regular,
    fontSize: 14,
  },
});
