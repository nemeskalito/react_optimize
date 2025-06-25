import { useCallback } from "react";

import "./App.css";

const CounterButton = ({ count, setCount }) => {
  const handleClick = useCallback(() => {
    setCount((val) => ++val);
  }, [setCount]);
  return (
    <div>
      <button onClick={handleClick}>+++</button>
      <p>{count}</p>
    </div>
  );
};

export default CounterButton;
