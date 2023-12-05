import { useState } from "react";
const Couter = () => {
  const [count, setCount] = useState(0);
  const plus = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h3>Couter:</h3>
      <p>{count}</p>
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={reset}>0</button>
    </div>
  );
};

export default Couter;
