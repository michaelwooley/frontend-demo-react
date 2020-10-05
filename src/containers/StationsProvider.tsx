import { StationsContext } from "common/context";
import { useStations } from "hooks/useStations";
import React from "react";
import { IStationName } from "../common/data/stations";

/**
 * Handles the set of active stations globally.
 * @param param0
 */
export const StationsProvider: React.FC = ({ ...props }) => {
  const { stations, onAdd, onRemove, onMoveDown, onMoveUp } = useStations();

  return (
    <StationsContext.Provider
      value={{
        stations,
        onAdd: (s: IStationName) => onAdd(s),
        onRemove,
        onMoveUp,
        onMoveDown,
      }}
    >
      {props.children}
    </StationsContext.Provider>
  );
};
