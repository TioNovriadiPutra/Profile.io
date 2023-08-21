import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../../../themes/Colors";
import ProfileIoQuizButton from "../../atoms/ProfileIoQuizButton";
import { Fonts } from "../../../themes/Fonts";
import { useRecoilValue } from "recoil";
import { navState } from "../../../store/NavState";

const QuizIntroDesc = ({ desc, quizQuestions, ratingId }) => {
  const nav = useRecoilValue(navState);

  return (
    <View style={styles.container}>
      <Text style={styles.desc}>{desc}</Text>

      <ProfileIoQuizButton
        label={"Start"}
        onPress={() =>
          nav.navigate("Quiz", {
            quizQuestions,
            ratingId,
          })
        }
      />
    </View>
  );
};

export default QuizIntroDesc;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 31,
    paddingTop: 100,
    paddingBottom: 35,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  desc: {
    fontFamily: Fonts.Light,
    fontSize: 16,
    color: Colors.Black,
    textAlign: "center",
    marginBottom: 54,
  },
});
