import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../themes/Colors";

const SecondaryContainer = ({ children }) => {
  return (
    <SafeAreaView edges={["top", "left", "right"]} style={styles.container}>
      {children}
    </SafeAreaView>
  );
};

export default SecondaryContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.SecondWhite,
  },
});
