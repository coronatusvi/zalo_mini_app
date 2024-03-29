import { atom } from "recoil";

export const displayNameState = atom({
  key: "displayName",
  default: {
    userName: "",
    displayName: "Display Name",
  },
});
