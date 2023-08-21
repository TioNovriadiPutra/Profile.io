import { View, Text, Modal, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../themes/Colors";
import { Fonts } from "../../themes/Fonts";

const DeleteModal = ({
  visible,
  label,
  setShowModal,
  onDelete,
  submit = false,
}) => {
  return (
    <Modal visible={visible} transparent>
      <View style={styles.modal}>
        <View style={styles.container}>
          <Text style={styles.title}>Confirmation</Text>

          <Text style={styles.confirm}>
            Are you sure you want to {submit === false ? "delete" : "submit"}{" "}
            this {label}
          </Text>

          <View style={styles.btnContainer}>
            <TouchableOpacity
              style={styles.btnNo}
              onPress={() => setShowModal(false)}
            >
              <Text style={styles.noLabel}>No</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnYes} onPress={onDelete}>
              <Text style={styles.yesLabel}>
                Yes,{" "}
                {submit === false
                  ? "i want to remove this card"
                  : "i want to submit"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteModal;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: Colors.Modal,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: Colors.White,
    width: "90%",
    height: 457,
    borderRadius: 20,
    paddingHorizontal: 37,
    paddingTop: 43,
    paddingBottom: 40,
    justifyContent: "space-between",
  },
  title: {
    textAlign: "center",
    fontFamily: Fonts.SemiBold,
    fontSize: 22,
    color: Colors.Black,
  },
  confirm: {
    textAlign: "center",
    fontFamily: Fonts.SemiBold,
    fontSize: 18,
    color: Colors.Black,
  },
  btnNo: {
    backgroundColor: Colors.Orange,
    height: 46,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  noLabel: {
    fontFamily: Fonts.Bold,
    fontSize: 20,
    color: Colors.White,
  },
  btnYes: {
    alignItems: "center",
    marginHorizontal: 20,
  },
  yesLabel: {
    fontFamily: Fonts.SemiBold,
    fontSize: 16,
    color: Colors.Placeholder,
    textAlign: "center",
  },
  btnContainer: {
    gap: 23,
  },
});
