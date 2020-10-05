import { IStationName } from "common";
import React from "react";
import "./index.scss";

interface CityAddRowProps {
  /**
   * Station to be handled
   */
  station: IStationName;

  /**
   * Toggle modal open/close
   */
  onAdd: (
    s: IStationName,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
}

const CityAddRow: React.FC<CityAddRowProps> = ({
  station,
  onAdd,
  ...props
}) => (
  <div
    className="city-add-row columns is-selectable mr-0 ml-0 pr-1 pl-1"
    {...props}
    title="Click to add station"
    onClick={(e) => onAdd(station, e)}
  >
    <div className="column content is-narrow">
      {" "}
      <p className="has-text-weight-semibold">{station.city}</p>
      <p className="is-size-7 has-text-weight-light unveil">{station.name}</p>
      <p className="is-size-7 unveil">{station.id}</p>
    </div>
    <div className="column">
      <span className="icon is-pulled-right unveil">
        <i className="fas fa-plus"></i>
      </span>
    </div>
  </div>
);

export interface CityAddProps {
  /**
   * Stations that can be added.
   */
  stations: IStationName[];

  /**
   * Toggle modal open/close
   */
  onAdd: (
    s: IStationName,
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
}

/**
 * Primary UI component for user interaction
 */
export const CityAdd: React.FC<CityAddProps> = ({ stations, onAdd }) => {
  return (
    <div className="city-add box">
      {/* TODO Add title */}
      <div className="columns mr-1 ml-0 pr-1 pl-1">
        <div className="column">
          <h3 className="title is-4 mb-0">Add cities</h3>
          <p className="is-narrow is-size-7 is-italic pb-1 pt-0 mb-0 mt-0">
            Click a row to add the city
          </p>
        </div>
        <div className="column"></div>
      </div>
      {stations.map((s) => (
        <CityAddRow station={s} onAdd={onAdd} key={s.id}></CityAddRow>
      ))}
    </div>
  );
};
