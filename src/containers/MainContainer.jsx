import React from "react";
import { StyleSheet } from "react-native";
import { Colors } from "../themes/Colors";
import { SafeAreaView } from "react-native-safe-area-context";

const MainContainer = ({ children }) => {
  return (
    <SafeAreaView edges={["top", "left", "right"]} style={styles.container}>
      {children}
    </SafeAreaView>
  );
};

export default MainContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
  },
});
