import { ModalsProvider } from "containers/ModalsProvider";
import React from "react";

export const ContextProvider: React.FC = ({ ...props }) => {
  return <ModalsProvider>{props.children}</ModalsProvider>;
};
