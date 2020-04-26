import React, { useState, useContext } from "react";
import { ListContext } from "../stateContext/AppContext";

const Form = () => {
  const { addedItem } = useContext(ListContext);
  const [user, setUser] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    const newItems = {
      item: user,
      id: Math.floor(Math.random() * 10000000) + 1,
      resolved: false
    };

    addedItem(newItems);
    setUser("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={user} onChange={e => setUser(e.target.value)} />
      <input type="submit" value="Add" />
    </form>
  );
};

export default Form;
