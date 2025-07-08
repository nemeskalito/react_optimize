import React, { useCallback, useContext } from "react";

import "./App.css";
import { ThemeContext } from "./App";

const CounterButton = React.memo(({ count, setCount }) => {
  const { isDark } = useContext(ThemeContext);

  const handleClick = () => {
    setCount((val) => ++val);
  };
  return (
    <div className={`${isDark ? "dark" : "light"}`}>
      <button onClick={handleClick}>+++</button>
      <p>{count}</p>
    </div>
  );
});

export default CounterButton;
