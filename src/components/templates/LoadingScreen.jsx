import { View } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Colors } from "../../themes/Colors";
import { ActivityIndicator } from "react-native";

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={"large"} />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.White,
    justifyContent: "center",
    alignItems: "center",
  },
});
