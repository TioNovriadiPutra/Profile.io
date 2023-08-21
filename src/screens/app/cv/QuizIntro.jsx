import React, { useEffect } from "react";
import QuizContainer from "../../../containers/QuizContainer";
import QuizIntroDesc from "../../../components/organisms/contents/QuizIntroDesc";
import useFetchData from "../../../hooks/useFetchData";
import { API_ACCESS } from "../../../utils/config/Endpoint";
import LoadingScreen from "../../../components/templates/LoadingScreen";

const QuizIntro = ({ route }) => {
  const { level, ratingId } = route.params;

  const { fetchFunction, data } = useFetchData();

  useEffect(() => {
    fetchFunction(API_ACCESS.showUserQuiz + `/${level}`, "GET", true);
  }, []);

  if (data === null) {
    return <LoadingScreen />;
  }

  return (
    <QuizContainer>
      <QuizIntroDesc
        desc={data[0].desc}
        quizQuestions={data[0].quizQuestions}
        ratingId={ratingId}
      />
    </QuizContainer>
  );
};

export default QuizIntro;
