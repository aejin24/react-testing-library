import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { inputAtom } from "../../recoil/form";

export default function Input() {
  const [value, setValue] = useRecoilState(inputAtom);

  return (
    <input
      data-testid="test"
      name="test"
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value);
      }}
    />
  );
}
