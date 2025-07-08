import React, { useContext, useMemo } from "react";

import "./App.css";
import { ThemeContext } from "./App";

const ItemList = ({ array, search }) => {
  const { isDark } = useContext(ThemeContext);

  const filterItems = useMemo(() => {
    if (!search) return [];
    return array.filter((item) => item.includes(search));
  }, [array, search]);
  return (
    <ul className={`list ${isDark ? "dark" : "light"}`}>
      {filterItems.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </ul>
  );
};

export default ItemList;
