import { useState } from "react";
import Button from '@mui/material/Button';

//ChildCount - это дочерний компонент, в который мы хотим передать count
function ParentCounter() {
  const [count, setCount] = useState(0);
  const upCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>Родитель</h2>
      {/* вот сюда мы должны передать  count. Передаем пропсами*/}
      <ChildCount count={count} />
      <Button onClick={upCount} variant="contained">+ 1</Button>
      
    </div>
  );
}

function ChildCount({ count }) {
  return (
    <div>
      <p>Счетчик внутри</p>
      <p>Значение счетчика {count}</p>
    </div>
  );
}

export default ParentCounter;
