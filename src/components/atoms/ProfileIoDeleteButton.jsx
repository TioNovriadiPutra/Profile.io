import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import React, { useState } from "react";
import { Fonts } from "../../themes/Fonts";
import { Colors } from "../../themes/Colors";
import DeleteModal from "../templates/DeleteModal";

const ProfileIoDeleteButton = ({ onPress }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => setShowModal(true)}
      >
        <Text style={styles.btnLabel}>Delete</Text>
      </TouchableOpacity>

      <DeleteModal
        visible={showModal}
        label={"project"}
        setShowModal={setShowModal}
        onDelete={onPress}
      />
    </View>
  );
};

export default ProfileIoDeleteButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    alignItems: "center",
    paddingBottom: 24,
    paddingTop: 36,
  },
  btnContainer: {
    backgroundColor: Colors.Red,
    paddingHorizontal: 67,
    paddingVertical: 12,
    borderRadius: 10,
  },
  btnLabel: {
    fontFamily: Fonts.SemiBold,
    fontSize: 16,
    color: Colors.White,
  },
});
