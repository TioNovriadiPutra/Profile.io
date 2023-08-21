import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useRecoilValue } from "recoil";
import { quizPage } from "../../../store/QuizState";
import { Fonts } from "../../../themes/Fonts";
import { Colors } from "../../../themes/Colors";

const QuizHeader = ({ totalPage }) => {
  const page = useRecoilValue(quizPage);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {page + 1} <Text style={styles.label2}>of {totalPage}</Text>
      </Text>
    </View>
  );
};

export default QuizHeader;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 23,
    alignItems: "center",
  },
  label: {
    fontFamily: Fonts.SemiBold,
    fontSize: 14,
    color: Colors.Black,
  },
  label2: {
    color: Colors.White,
  },
});
