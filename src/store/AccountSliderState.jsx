import { atom } from "recoil";

const sliderPage = atom({
  key: "sliderPage",
  default: 0,
});

const dataUser = atom({
  key: "dataUser",
  default: null,
});

export { sliderPage, dataUser };
