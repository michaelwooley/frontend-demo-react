import { LOCAL_STORAGE_KEYS, IStationName } from "common";
import { useEffect } from "react";
import useArrayReducer from "./useArrayReducer";

const KEY = LOCAL_STORAGE_KEYS.STATIONS;

export function useStations() {
  const { state: stations, onAdd, onRemove, onMove } = useArrayReducer<
    IStationName[]
  >(JSON.parse(localStorage.getItem(KEY) || JSON.stringify([])));

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(stations));
  }, [stations]);

  return { stations, onAdd, onMove, onRemove };
}
