import { useEffect } from "react";
import { useRecoilValue } from "recoil";

type TProps = {
  node: any;
  onChange: any;
};

export default function RecoilObserver({ node, onChange }: TProps) {
  const value = useRecoilValue(node);

  useEffect(() => onChange(value), [onChange, value]);

  return null;
}
