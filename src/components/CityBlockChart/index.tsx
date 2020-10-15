import { IWeatherStatSpec } from "common/weather";
import React from "react";
import "./index.scss";

const SeriesSelection: React.FC<{
  specs: IWeatherStatSpec[];
  active: IWeatherStatSpec;
  onSelect: (spec: IWeatherStatSpec) => void;
}> = ({ specs, active, onSelect }) => {
  const _onSelect = (e: React.ChangeEvent<HTMLSelectElement>): void =>
    onSelect(specs.find((spec) => spec.id === e.target.value) || specs[0]);

  return (
    <div className="control has-icons-left is-expanded">
      <div className="select is-expanded is-medium">
        <select
          className="is-expanded"
          aria-label="select-series"
          title="Select a series to chart"
          onChange={_onSelect}
          value={active.id}
        >
          {specs.map((spec) => (
            <option key={spec.id} value={spec.id}>
              {spec.name}
            </option>
          ))}
        </select>
      </div>
      <div className="icon is-medium is-left">
        <i className="fas fa-chart-line"></i>
      </div>
    </div>
  );
};

const HeaderButton: React.FC<{
  icon: string;
  title: string;
  disabled?: boolean;
  className?: string;
  onClick: () => void;
}> = ({ icon, title, disabled = false, className = "", onClick }) => (
  <button
    className={`button is-medium ${className}`}
    title={title}
    onClick={onClick}
    disabled={disabled}
  >
    <span className="icon has-text-color-link">
      <i className={icon}></i>
    </span>
  </button>
);

const InfoButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <HeaderButton
    disabled={true}
    title="Display info for the selected series"
    icon="fas fa-info-circle"
    onClick={onClick}
  />
);

const FullScreenButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <HeaderButton
    disabled={true}
    title="Display the chart fullscreen"
    icon="fas fa-expand"
    onClick={onClick}
  />
);

const Header: React.FC<{
  selectComponent: React.ReactNode;
  infoButton: React.ReactNode;
  fullScreenButton: React.ReactNode;
}> = ({ selectComponent, infoButton, fullScreenButton }) => (
  <div className="field is-horizontal is-expanded">
    <div className="field-body">
      <div className="field has-addons">
        {selectComponent}
        <div className="control">{infoButton}</div>
        <div className="control">{fullScreenButton}</div>
      </div>
    </div>
  </div>
);

export interface CityBlockChartProps {
  onInfo: () => void;
  onFullScreen: () => void;
  onSeriesSelect: (spec: IWeatherStatSpec) => void;

  specs: IWeatherStatSpec[];
  activeSeries: IWeatherStatSpec;
}

/**
 * Outline for chart container
 */
export const CityBlockChart: React.FC<CityBlockChartProps> = ({
  specs,
  activeSeries,
  onInfo,
  onFullScreen,
  onSeriesSelect,
  ...props
}) => {
  return (
    <div className="city-block-chart card" {...props}>
      <header className="card-header pl-5 pr-5 pt-3 pb-3">
        <Header
          selectComponent={
            <SeriesSelection
              active={activeSeries}
              specs={specs}
              onSelect={onSeriesSelect}
            />
          }
          infoButton={<InfoButton onClick={onInfo} />}
          fullScreenButton={<FullScreenButton onClick={onFullScreen} />}
        ></Header>
      </header>
      <div className="card-content">
        <div className="content">{props.children}</div>
      </div>
    </div>
  );
};
