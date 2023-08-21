import { atom } from "recoil";

const refreshState = atom({
  key: "refresh",
  default: false,
});

export { refreshState };
