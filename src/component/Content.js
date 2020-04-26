import React, { useContext, useState } from "react";
import { ListContext } from "../stateContext/AppContext";

const Content = ({ items }) => {
  const { handleDelete } = useContext(ListContext);
  const [resolve, setResolve] = useState(false);

  const handleOnDelete = () => {
    handleDelete(items.id);
  };
  const isResolved = () => {
    setResolve(prevState => !prevState);
  };

  return (
    <div className="m-1">
      <li
        className={
          resolve
            ? "flex justify-between bg-red-500"
            : " flex justify-between bg-teal-700"
        }
      >
        <p className="my-2 text-gray-200  p-1 rounded font-bold uppercase">
          {items.item}
        </p>
        <div>
          <span>
            <button onClick={isResolved}>
              <i
                className="fas fa-check mx-2  p-2 my-1"
                style={{ color: "white" }}
              />
            </button>
          </span>
          <button onClick={handleOnDelete}>
            <i className="fas fa-trash-alt p-2" style={{ color: "red" }} />
          </button>
          <span />
        </div>
      </li>
    </div>
  );
};
export default Content;
