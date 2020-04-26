import React, { useContext } from "react";
import { ListContext } from "../stateContext/AppContext";
import Content from "./Content";

const ContentList = () => {
  const { list } = useContext(ListContext);

  return (
    <div>
      {list.map(item => (
        <Content key={item.id} items={item} />
      ))}
    </div>
  );
};
export default ContentList;
