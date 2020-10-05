import { IStationName } from "common";
import React from "react";
import "./index.scss";

interface CityOrderRowProps {
  /**
   * Station to be handled
   */
  station: IStationName;

  /**
   * Index/order of station
   */
  idx: number;

  /**
   * Remove station from dashboard
   */
  onRemove: (idx: number) => void;

  /**
   * Move station up in dashboard
   */
  onMoveUp: (idx: number) => void;

  /**
   * Move station down in dashboard
   */
  onMoveDown: (idx: number) => void;
}

const CityOrderRow: React.FC<CityOrderRowProps> = ({
  station,
  idx,
  onRemove,
  onMoveUp,
  onMoveDown,
  ...props
}) => (
  <div
    className="city-order-row columns is-selectable mr-0 ml-0 pr-1 pl-1"
    {...props}
  >
    <div className="column content is-narrow">
      {" "}
      <p className="has-text-weight-semibold">{station.city}</p>
      <p className="is-size-7 has-text-weight-light">{station.name}</p>
      <p className="is-size-7">{station.id}</p>
    </div>
    <div className="column">
      <span className="is-pulled-right"> </span>
    </div>
    <div className="column is-narrow">
      <div className="field has-addons">
        <p className="control">
          <button className="button" title="Move station down">
            <span className="icon">
              <i className="fas fa-chevron-down"></i>
            </span>
          </button>
        </p>
        <p className="control">
          <button className="button" title="Move station up">
            <span className="icon">
              <i className="fas fa-chevron-up"></i>
            </span>
          </button>
        </p>
      </div>
    </div>
    <div className="column is-narrow">
      <div className="field has-addons">
        <p className="control">
          <button
            className="button is-danger is-outlined"
            title="Remove station"
          >
            <span className="icon">
              <i className="fas fa-trash"></i>
            </span>
          </button>
        </p>
      </div>
    </div>
  </div>
);

export interface CityOrderProps {
  /**
   * Stations that can be added.
   */
  stations: IStationName[];

  /**
   * Remove station from dashboard
   */
  onRemove: (idx: number) => void;

  /**
   * Move station up in dashboard
   */
  onMoveUp: (idx: number) => void;

  /**
   * Move station down in dashboard
   */
  onMoveDown: (idx: number) => void;
}

/**
 * Primary UI component for user interaction
 */
export const CityOrder: React.FC<CityOrderProps> = ({
  stations,
  onRemove,
  onMoveUp,
  onMoveDown,
}) => {
  return (
    <div className="city-order box">
      <div className="columns mr-1 ml-0 pr-1 pl-1">
        <div className="column">
          <h3 className="title is-4 mb-0">Your stations</h3>
        </div>
        <div className="column"></div>
      </div>
      <div className="pb-5">
        {stations.length > 0 ? (
          stations.map((s, i) => (
            <CityOrderRow
              station={s}
              idx={i}
              onRemove={onRemove}
              onMoveUp={onMoveUp}
              onMoveDown={onMoveDown}
              key={s.id}
            />
          ))
        ) : (
          <div className="columns mr-1 ml-0 pr-1 pl-1">
            <div className="column">
              <h4 className="subtitle is-5 mb-0">No stations to add</h4>
              <p className="is-size-7 is-italic pb-1 pt-0 mb-0 mt-0">
                You added all available stations to the dashboard!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
