import React from "react";
import { StationObservation } from "types/weather.types";
import "./index.scss";

const SeriesSelection: React.FC<{}> = ({}) => {
  return (
    <div className="dropdown is-hoverable is-expanded">
      <div className="dropdown-trigger is-expanded">
        <button
          className="button is-fullwidth is-medium"
          aria-haspopup="true"
          aria-controls="dropdown-menu4"
        >
          <span>Hover me</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu4" role="menu">
        <div className="dropdown-content">
          <div className="dropdown-item">
            <p>
              You can insert <strong>any type of content</strong> within the
              dropdown menu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export interface CityBlockChartProps {
  data: StationObservation;
}

/**
 * Outline for chart container
 */
export const CityBlockChart: React.FC<CityBlockChartProps> = ({
  data,
  ...props
}) => {
  return (
    <div className="city-block-chart card" {...props}>
      <header className="card-header">
        <div className="columns pt-1 pb-1 pr-3 pl-3 m-0 is-expanded is-vcentered">
          <div className="column">
            <SeriesSelection></SeriesSelection>
          </div>
          <div className="column is-narrow">
            <button className="button is-medium">info</button>
          </div>
          <div className="column is-narrow">
            <button
              className="button is-medium"
              title="Show chart in full screen mode"
            >
              <span className="icon">
                <i className="fas fa-expand"></i>
              </span>
            </button>
          </div>
        </div>
        {/* <p className="card-header-title">Component</p>
        <a href="#" className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </a> */}
      </header>
      <div className="card-content">
        <div className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris.
          <br />
          <button
            className="button is-fullwidth is-medium"
            aria-haspopup="true"
            aria-controls="dropdown-menu4"
          >
            <span>Hover me</span>
            <span className="icon is-small">
              <i className="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
          <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>
  );
};
