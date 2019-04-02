import React from "react";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";
const DropContext = ({ children }) => {
  return <div>123123{children}</div>;
};

export default DragDropContext(HTML5Backend)(DropContext);
