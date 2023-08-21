import React, { useEffect, useRef } from "react";
import QuizContainer from "../../../containers/QuizContainer";
import QuizHeader from "../../../components/organisms/headers/QuizHeader";
import QuizContent from "../../../components/organisms/contents/QuizContent";
import { useRecoilState } from "recoil";
import { quizAnswer } from "../../../store/QuizState";
import LoadingScreen from "../../../components/templates/LoadingScreen";
import QuizFooter from "../../../components/organisms/footers/QuizFooter";

const Quiz = ({ route }) => {
  const { quizQuestions, ratingId } = route.params;

  const [answer, setAnswer] = useRecoilState(quizAnswer);

  const quiz = useRef(null);

  useEffect(() => {
    let answers = [];

    for (let i = 0; i < quizQuestions.length; i++) {
      answers.push({
        valueOption: null,
        correct: null,
      });
    }

    setAnswer(answers);
  }, []);

  return (
    <QuizContainer>
      <QuizHeader totalPage={quizQuestions.length} />
      {answer === null ? (
        <LoadingScreen />
      ) : (
        <QuizContent data={quizQuestions} quizRef={quiz} />
      )}
      <QuizFooter
        quizRef={quiz}
        totalPage={quizQuestions.length}
        ratingId={ratingId}
        quizId={quizQuestions[0].sub_speciality_quiz_id}
      />
    </QuizContainer>
  );
};

export default Quiz;
