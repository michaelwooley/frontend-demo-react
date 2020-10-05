import { ModalsProvider } from "containers/ModalsProvider";
import React from "react";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { StationsProvider } from "./StationsProvider";

const queryCache = new QueryCache();

export const ContextProvider: React.FC = ({ ...props }) => (
  <ReactQueryCacheProvider queryCache={queryCache}>
    {" "}
    <ModalsProvider>
      <StationsProvider>{props.children}</StationsProvider>
    </ModalsProvider>
  </ReactQueryCacheProvider>
);
