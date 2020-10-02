import React, { useState } from "react";
import { IStationName } from "common/data/stations";
import "./index.scss";
import { useIsTablet } from "common/hooks";

const BodyTabs: React.FC<{
  currentComponent: React.ReactNode;
  chartComponent: React.ReactNode;
}> = ({ currentComponent, chartComponent }) => {
  type tabIds = "current" | "chart";
  const [activeTab, setActiveTab] = useState<tabIds>("current");

  const tabs: { id: tabIds; icon: string; label: string }[] = [
    { id: "current", icon: "fas fa-thermometer", label: "Current" },
    { id: "chart", icon: "fas fa-chart-line", label: "Charts" },
  ];

  return (
    <>
      <div className="tabs as-button is-centered is-small">
        <ul>
          {tabs.map((tab) => (
            <li
              key={tab.id}
              className={activeTab === tab.id ? "is-active" : ""}
            >
              <button
                className="button is-small"
                onClick={() => setActiveTab(tab.id)}
              >
                <span className="icon is-small">
                  <i className={tab.icon} aria-hidden="true"></i>
                </span>
                <span>{tab.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {activeTab === "current" && currentComponent}
        {activeTab === "chart" && chartComponent}
      </div>
    </>
  );
};

export interface CityBlockProps {
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

  /**
   * Displays dropdown menu on right of top bar.
   */
  dropdownComponent?: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const CityBlock: React.FC<CityBlockProps> = ({
  station,
  isOpen = false,
  onToggleOpen,
  dropdownComponent,
  ...props
}) => {
  const isTablet = useIsTablet();

  return (
    <div className="city-block mb-2" {...props}>
      <nav className="level mb-2">
        <div className="level-left">
          <div className="level-item">
            <button
              className="button is-medium is-white"
              onClick={() => onToggleOpen(station)}
            >
              <span className="icon">
                <i
                  className={`fas ${
                    isOpen ? "fa-chevron-up" : "fa-chevron-down"
                  }`}
                ></i>
              </span>
              <span className="has-text-weight-semibold">{station.city}</span>
            </button>
          </div>
        </div>

        <div className="level-right">
          {dropdownComponent && (
            <div className="level-item">{dropdownComponent}</div>
          )}
        </div>
      </nav>
      {isOpen &&
        (isTablet ? (
          <div className="columns">
            <div className="column is-narrow">left</div>
            <div className="column">right</div>
          </div>
        ) : (
          <BodyTabs
            currentComponent={<div>current</div>}
            chartComponent={<div>chart</div>}
          ></BodyTabs>
        ))}
    </div>
  );
};
