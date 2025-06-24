import { useCallback, useRef } from "react";

import "./App.css";
const SearchInput = ({ search, setSearch }) => {
  const searchItem = useRef();
  const searchClick = useCallback(() => {
    setSearch(searchItem.current.value);
  }, [setSearch]);
  return (
    <div>
      <input ref={searchItem} type="text" />
      <button onClick={searchClick}>Поиск</button>
    </div>
  );
};

export default SearchInput;
