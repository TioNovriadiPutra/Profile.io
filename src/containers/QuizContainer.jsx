import { ImageBackground, StyleSheet } from "react-native";
import React from "react";

const QuizContainer = ({ children }) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/image/quizIntroBackground.png")}
    >
      {children}
    </ImageBackground>
  );
};

export default QuizContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
