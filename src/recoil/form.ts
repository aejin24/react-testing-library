import { atom } from "recoil";

const inputAtom = atom({
  key: "formAtom",
  default: "",
});

export { inputAtom };
