import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Colors } from "../../../themes/Colors";
import ProfileIoQuizButton from "../../atoms/ProfileIoQuizButton";
import { useRecoilState, useRecoilValue } from "recoil";
import { quizAnswer, quizPage } from "../../../store/QuizState";
import DeleteModal from "../../templates/DeleteModal";
import useFetchData from "../../../hooks/useFetchData";
import { API_ACCESS } from "../../../utils/config/Endpoint";

const QuizFooter = ({ quizRef, totalPage, ratingId, quizId }) => {
  const [page, setPage] = useRecoilState(quizPage);
  const answer = useRecoilValue(quizAnswer);

  const { fetchFunction } = useFetchData();

  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <ProfileIoQuizButton
        label={"Prev"}
        onPress={() => {
          if (page > 0) {
            quizRef.current.scrollToIndex({ animation: true, index: page - 1 });
            setPage(page - 1);
          }
        }}
      />
      <ProfileIoQuizButton
        label={"Next"}
        onPress={() => {
          if (page !== totalPage - 1) {
            quizRef.current.scrollToIndex({ animation: true, index: page + 1 });
            setPage(page + 1);
          } else {
            setShowModal(true);
          }
        }}
      />

      <DeleteModal
        visible={showModal}
        label={"quiz"}
        setShowModal={setShowModal}
        submit
        onDelete={() => {
          fetchFunction(
            API_ACCESS.submitQuiz,
            "POST",
            true,
            false,
            {
              subSpecialityQuizId: quizId,
              subSpecialityRatingId: ratingId,
              answers: answer,
            },
            "ShowQuizScore",
            "Quiz submitted!",
            true
          );
        }}
      />
    </View>
  );
};

export default QuizFooter;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderTopWidth: 2,
    borderTopColor: Colors.Border,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
