import { useRecoilState } from "recoil";
import { counterAtom } from "../../recoil/counter";

export default function Counter() {
  const [count, setCount] = useRecoilState(counterAtom);

  return (
    <>
      <p>{count}</p>
      <button type="button" onClick={() => setCount(count + 1)}>
        +
      </button>
      <button type="button" onClick={() => setCount(count - 1)}>
        -
      </button>
    </>
  );
}
