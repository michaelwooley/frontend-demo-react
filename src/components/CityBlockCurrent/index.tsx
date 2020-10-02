import React, { useState } from "react";
import { IStationName } from "common/data/stations";
import "./index.scss";
import { useIsTablet } from "hooks/useIsTablet";

export interface CityBlockCurrentProps {
  /**
   * Station data
   */
  station: IStationName;

  /**
   * If true, the full panel is displayed
   */
  isOpen: boolean;

  /**
   * Called to toggle panel open or close.
   */
  onToggleOpen: (station: IStationName) => void;

  currentComponent: React.ReactNode;
  chartComponent: React.ReactNode;

  /**
   * Displays dropdown menu on right of top bar.
   */
  dropdownComponent?: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const CityBlockCurrent: React.FC<CityBlockCurrentProps> = ({
  station,
  isOpen = false,
  onToggleOpen,
  currentComponent,
  chartComponent,
  dropdownComponent,
  ...props
}) => {
  const isTablet = useIsTablet();

  return (
    <div className="city-block mb-2 pb-2" {...props}>
      <nav className="level mb-1">
        <div className="level-left">
          <div className="level-item">
            <button
              className="button is-medium is-white"
              onClick={() => onToggleOpen(station)}
            >
              {/* TODO Figure out responsive icons */}
              {isOpen ? (
                <span className="icon">
                  <i className="fas fa-chevron-up"></i>
                </span>
              ) : (
                <span className="icon">
                  <i className="fas fa-chevron-down"></i>
                </span>
              )}

              <span className="has-text-weight-semibold">{station.city}</span>
            </button>
          </div>
        </div>

        <div className="level-right">
          {/* TODO Add current temperature + status */}
          {dropdownComponent && (
            <div className="level-item">{dropdownComponent}</div>
          )}
        </div>
      </nav>
      {isOpen &&
        (isTablet ? (
          <div className="columns">
            <div className="column is-narrow">{currentComponent}</div>
            <div className="column">{chartComponent}</div>
          </div>
        ) : (
          <BodyTabs
            currentComponent={currentComponent}
            chartComponent={chartComponent}
          ></BodyTabs>
        ))}
    </div>
  );
};
