import { atom } from "recoil";

const sliderPageCV = atom({
  key: "sliderPageCV",
  default: 0,
});

const dataPortfolio = atom({
  key: "dataPortfolio",
  default: null,
});

const dataSkill = atom({
  key: "dataSkill",
  default: null,
});

export { sliderPageCV, dataPortfolio, dataSkill };
