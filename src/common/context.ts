import React from "react";
import { IStationName } from "common/data";

export type IModalNames = { cities: boolean };

export type IModalsContext = {
  modals: IModalNames;
  toggle: (k: keyof IModalNames) => void;
};

export const ModalsContext = React.createContext<IModalsContext>({
  modals: {
    cities: false,
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  toggle: (k: keyof IModalNames) => null,
});

/**
 * Specifies the set of stations that are currently selected by the user.
 */
export const StationsContext = React.createContext<{
  stations: IStationName[];
  onAdd: (s: IStationName) => void;
  onRemove: (idx: number) => void;
  onMoveUp: (idx: number) => void;
  onMoveDown: (idx: number) => void;
}>({
  stations: [],
  onAdd: () => null,
  onRemove: () => null,
  onMoveUp: () => null,
  onMoveDown: () => null,
});
