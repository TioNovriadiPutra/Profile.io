import { StyleSheet } from "react-native";
import React from "react";
import { WebView } from "react-native-webview";

const PortoWebView = ({ route }) => {
  const { link } = route.params;

  return <WebView style={styles.container} source={{ uri: link }} />;
};

export default PortoWebView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
