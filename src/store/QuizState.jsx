import { atom } from "recoil";

const quizPage = atom({
  key: "quizPage",
  default: 0,
});

const quizAnswer = atom({
  key: "quizAnswer",
  default: null,
});

export { quizPage, quizAnswer };
