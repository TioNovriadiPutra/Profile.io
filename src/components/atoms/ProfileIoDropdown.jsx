import { View, Text } from "react-native";
import React, { useRef, useState } from "react";
import InputContainer from "../../containers/InputContainer";
import { useController } from "react-hook-form";
import { Modal } from "react-native";
import { StyleSheet } from "react-native";
import { Fonts } from "../../themes/Fonts";
import { Colors } from "../../themes/Colors";
import { Animated } from "react-native";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import { RadioButton } from "react-native-paper";

const ProfileIoDropdown = ({
  name,
  defaultValue,
  control,
  placeholder,
  dataDropdown,
  title,
  customPress,
}) => {
  const { field } = useController({
    name,
    defaultValue,
    control,
  });

  const modalContainer = useRef(new Animated.Value(0)).current;

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
    Animated.timing(modalContainer, {
      toValue: 500,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  const closeModal = () => {
    Animated.timing(modalContainer, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();

    setTimeout(() => {
      setShowModal(false);
    }, 1000);
  };

  return (
    <InputContainer touch onPress={openModal}>
      <Text
        style={[
          styles.result,
          { color: field.value === null ? Colors.Placeholder : Colors.Black },
        ]}
      >
        {field.value === null ? placeholder : field.value.label}
      </Text>

      <Modal visible={showModal} transparent>
        <View style={styles.container}>
          <Animated.View
            style={[styles.dataContainer, { height: modalContainer }]}
          >
            <View style={styles.modalHeader}>
              <Image source={require("../../assets/image/xWhite.png")} />
              <Text style={styles.title}>{title}</Text>
              <TouchableOpacity onPress={closeModal}>
                <Image source={require("../../assets/image/x.png")} />
              </TouchableOpacity>
            </View>

            <FlatList
              data={dataDropdown}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <View style={styles.dropdownItem}>
                  <Text style={styles.label}>{item.label}</Text>

                  <RadioButton
                    value={item.value}
                    color={Colors.Green}
                    status={
                      field.value === null
                        ? "unchecked"
                        : field.value.value === item.value
                        ? "checked"
                        : "unchecked"
                    }
                    onPress={() => {
                      if (customPress) customPress();
                      field.onChange(item);
                      closeModal();
                    }}
                  />
                </View>
              )}
            />
          </Animated.View>
        </View>
      </Modal>
    </InputContainer>
  );
};

export default ProfileIoDropdown;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  result: {
    fontFamily: Fonts.Regular,
    fontSize: 14,
  },
  dataContainer: {
    backgroundColor: Colors.White,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 24,
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 18,
  },
  title: {
    fontFamily: Fonts.SemiBold,
    fontSize: 16,
    color: Colors.Black,
  },
  dropdownItem: {
    flexDirection: "row",
    marginTop: 31,
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    fontFamily: Fonts.Regular,
    fontSize: 16,
    color: Colors.Black,
  },
});
