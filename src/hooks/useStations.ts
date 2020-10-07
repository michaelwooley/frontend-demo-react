import { IStationName, LOCAL_STORAGE_KEYS } from "common";
import { useEffect } from "react";
import useArrayReducer, { IArrayReducerActionsOutput } from "./useArrayReducer";

const KEY = LOCAL_STORAGE_KEYS.STATIONS;

export interface IUseStationsOutput
  extends IArrayReducerActionsOutput<IStationName> {
  stations: IStationName[];
}

export function useStations(): IUseStationsOutput {
  const {
    state: stations,
    onAdd,
    onRemove,
    onMove,
    onMoveDown,
    onMoveUp,
  } = useArrayReducer<IStationName>(
    JSON.parse(localStorage.getItem(KEY) || JSON.stringify([]))
  );

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(stations));
  }, [stations]);

  return { stations, onAdd, onMove, onRemove, onMoveDown, onMoveUp };
}
