import { ModalsProvider } from "containers/ModalsProvider";
import React from "react";
import { QueryCache, ReactQueryCacheProvider } from "react-query";

const queryCache = new QueryCache();

export const ContextProvider: React.FC = ({ ...props }) => {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      {" "}
      <ModalsProvider>{props.children}</ModalsProvider>
    </ReactQueryCacheProvider>
  );
};
