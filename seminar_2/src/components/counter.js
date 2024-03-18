import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const updateCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <button onClick={updateCount}>Вы нажали {count} раз</button>
    </>
  );
}

export default Counter;
