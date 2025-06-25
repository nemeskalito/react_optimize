import { useCallback, useRef } from "react";

import "./App.css";
const SearchInput = ({ setSearch }) => {
  const searchItem = useRef();
  const searchInList = useCallback(() => {
    setSearch(searchItem.current.value);
  }, [setSearch]);
  return (
    <div>
      <input ref={searchItem} type="text" onChange={searchInList} />
    </div>
  );
};

export default SearchInput;
