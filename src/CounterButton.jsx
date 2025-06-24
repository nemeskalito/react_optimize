import { useCallback } from "react";

import "./App.css";

const CounterButton = ({ count, setCount }) => {
  const handleClick = useCallback(() => {
    setCount((val) => ++val);
  }, [setCount]);
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>+++</button>
    </div>
  );
};

export default CounterButton;
