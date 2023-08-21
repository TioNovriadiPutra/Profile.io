import { atom } from "recoil";

const IsLoading = atom({
  key: "isLoading",
  default: false,
});

const IsLoadingModal = atom({
  key: "isLoadingModal",
  default: false,
});

export { IsLoading, IsLoadingModal };
