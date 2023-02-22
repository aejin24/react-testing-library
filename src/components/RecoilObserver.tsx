import { useEffect } from "react";
import { useRecoilValue } from "recoil";

export default function RecoilObserver({
  node,
  onChange,
}: {
  node: any;
  onChange: any;
}) {
  const value = useRecoilValue(node);
  useEffect(() => onChange(value), [onChange, value]);
  return null;
}
