import React from "react";
import { DndProvider } from "@alitajs/dnd";
const DropContext = ({ children }) => {
  return <DndProvider>{children}</DndProvider>;
};

export default DropContext;
