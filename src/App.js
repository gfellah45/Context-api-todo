import React from "react";
import "./styles.css";
import Nav from "./component/Nav";
import Form from "./component/Form";
import ContentList from "./component/ContentList";
import { ListProvider } from "./stateContext/AppContext";

export default function App() {
  return (
    <ListProvider>
      <div className="App">
        <Nav />
        <Form />
        <ContentList />
      </div>
    </ListProvider>
  );
}
