import { useState } from "react";

import Button from '@mui/material/Button';
//Разработайте компонент Counter , который отображает число и две кнопки: одна для увеличения значения на 1, другая для уменьшения на 1.
// Используйте хук useState для управления состоянием счетчика

function Counter() {
  let [counter, setCounter] = useState(0);

  const upCounter = () => {
    setCounter(counter++);
  };
  const downCounter = () => {
    if (counter === 0) {
      return;
    } else {
      setCounter(counter--);
    }
  };

  return (
    <>
      <Button onClick={downCounter} variant="outlined">
        -1
      </Button>
      <span>{counter}</span>
      <Button onClick={upCounter} variant="outlined">
        +1
      </Button>
    </>
  );
}

export default Counter;
