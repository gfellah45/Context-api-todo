import React, { useContext } from "react";
import { ListContext } from "../stateContext/AppContext";

const Nav = () => {
  const { list } = useContext(ListContext);

  return (
    <nav className="navigator">
      <h2 className="heading">Todo List</h2>
      <p className="count">
        Items Added{" "}
        <span className="bg-white rounded-full  text-sm h-5 w-5 inline-block text-center">
          {list.length}
        </span>
      </p>
    </nav>
  );
};

export default Nav;
