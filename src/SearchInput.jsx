import React, { useCallback, useContext, useRef } from "react";

import "./App.css";
import { ThemeContext } from "./App";
const SearchInput = React.memo(({ setSearch }) => {
  const searchInput = (e) => {
    setSearch(e.target.value);
  };
  const { isDark } = useContext(ThemeContext);
  return (
    <div className={`${isDark ? "dark" : "light"}`}>
      <input type="text" onChange={searchInput} />
    </div>
  );
});

export default SearchInput;
