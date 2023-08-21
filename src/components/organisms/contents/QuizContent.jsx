import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import React from "react";
import { Fonts } from "../../../themes/Fonts";
import { Colors } from "../../../themes/Colors";
import ProfileIoQuizOption from "../../molecules/ProfileIoQuizOption";

const WIDTH = Dimensions.get("window").width;

const QuizContent = ({ data, quizRef }) => {
  return (
    <FlatList
      ref={quizRef}
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      renderItem={({ item, index }) => (
        <View style={styles.quizContainer}>
          <View style={styles.questionContainer}>
            <Text style={styles.question}>{item.question}</Text>
          </View>

          <ProfileIoQuizOption
            dataOptions={item.quizOptions}
            questionIndex={index}
          />
        </View>
      )}
    />
  );
};

export default QuizContent;

const styles = StyleSheet.create({
  quizContainer: {
    width: WIDTH,
  },
  questionContainer: {
    marginHorizontal: 14,
    marginTop: 91,
    alignItems: "center",
  },
  question: {
    fontFamily: Fonts.SemiBold,
    fontSize: 18,
    color: Colors.White,
    textAlign: "center",
    textShadowColor: Colors.Modal,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
