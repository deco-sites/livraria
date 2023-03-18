import { useState } from "preact/hooks";

export default function Countdown() {
  const [count, setCount] = useState(0);

  return (
    <div>
      Contador: {count}. <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
