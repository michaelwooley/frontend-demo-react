import React from "react";
import { StationObservation } from "types/weather.types";
import "./index.scss";
import {
  WEATHER_STAT_SPEC,
  WEATHER_UNITS,
  IWeatherStatSpec,
} from "common/weather";

const CityBlockCurrentStat: React.FC<{
  spec: IWeatherStatSpec;
  stat: number;
}> = ({ spec, stat }) => {
  const units = WEATHER_UNITS[spec.unit];

  return (
    <div className="columns current-stat ml-0 mr-0">
      <div className="column is-narrow">
        <span className="icon">
          <i className={spec.icon}></i>
        </span>
      </div>
      <div className="column is-narrow has-text-weight-semibold">
        {" "}
        <abbr title={spec.description}>{spec.name}</abbr>
      </div>
      <div className="column pr-0">
        <div className="is-pulled-right">{stat}</div>
      </div>
      <div className="column is-narrow pl-0 is-italic">
        {" "}
        <abbr title={units.name}>{units.abbrev}</abbr>
      </div>
    </div>
  );
};

const CityBlockCurrentTitle: React.FC = () => (
  <div className="columns ml-0 mr-0">
    <div className="column has-text-weight-bold">Current weather</div>
  </div>
);

export interface CityBlockCurrentProps {
  data: StationObservation;
}

/**
 * Primary UI component for user interaction
 */
export const CityBlockCurrent: React.FC<CityBlockCurrentProps> = ({
  data,
  ...props
}) => {
  return (
    <div className="city-block-current box pl-0 pr-0" {...props}>
      <CityBlockCurrentTitle></CityBlockCurrentTitle>
      {WEATHER_STAT_SPEC.map(
        (spec) =>
          data.properties[spec.id].value && (
            <CityBlockCurrentStat
              spec={spec}
              stat={data.properties[spec.id].value || -1}
            ></CityBlockCurrentStat>
          )
      )}
    </div>
  );
};
