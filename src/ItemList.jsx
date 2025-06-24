import { useMemo } from "react";

import "./App.css";

const ItemList = ({ array, search }) => {
  const filterItems = useMemo(() => {
    return array.filter((item) => item === search).join(" ");
  }, [array, search]);
  return <div className="list">{filterItems}</div>;
};

export default ItemList;
