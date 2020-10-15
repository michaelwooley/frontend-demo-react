import React, { useMemo } from "react";
import { StationObservation } from "types/weather.types";
import "./index.scss";
import {
  WEATHER_STAT_SPEC,
  WEATHER_UNITS,
  IWeatherStatSpec,
} from "common/weather";
import { QueryStatus } from "react-query";

const CityBlockCurrentStat: React.FC<{
  spec: IWeatherStatSpec;
  stat: number;
}> = ({ spec, stat, ...props }) => {
  const units = WEATHER_UNITS[spec.unit];

  return (
    <div className="columns current-stat ml-0 mr-0" {...props}>
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

type ITitlePlaceholder = {
  [s in QueryStatus]: {
    title: string;
    message: string;
    icon: string;
    background: string;
    foreground: string;
    canRefetch: boolean;
  };
};

const STATUS_TITLES = {
  [QueryStatus.Error]: {
    title: "Error",
    message: "Could not load data.",
    icon: "fas fa-exclamation-circle",
    background: "has-background-danger-light",
    foreground: "has-text-danger",
    canRefetch: true,
  },
  [QueryStatus.Loading]: {
    title: "Data loading...",
    message: "This should only take a moment.",
    icon: "fas fa-hourglass-half",
    background: "has-background-white-ter",
    foreground: "",
    canRefetch: false,
  },
  [QueryStatus.Success]: {
    title: "Data fetch complete!",
    message: "Rendering now...",
    icon: "fas fa-hourglass-half",
    background: "has-background-success-light",
    foreground: "has-text-success-dark",
    canRefetch: true,
  },
} as ITitlePlaceholder;

const DataPlaceholder: React.FC<{
  status: QueryStatus;
  onRefetch: () => void | Promise<void>;
}> = ({ status, onRefetch }) => {
  const {
    title,
    message,
    icon,
    background,
    foreground,
    canRefetch,
  } = useMemo(() => STATUS_TITLES[status], [status]);

  return (
    <div className={`content m-3 p-5 has-text-centered ${background}`}>
      <h3 className={`title is-4 ${foreground}`}>
        <span className="icon pr-5">
          <i className={icon} />
        </span>
        <span>{title}</span>
      </h3>
      <p className="is-italic">{message}</p>
      <br />
      {canRefetch && (
        <button className="button is-medium" onClick={onRefetch}>
          Refetch the data
        </button>
      )}
    </div>
  );
};

const DataRows: React.FC<{ data: StationObservation }> = ({ data }) => (
  <>
    {WEATHER_STAT_SPEC.map((spec) =>
      data.properties[spec.id].value ? (
        <CityBlockCurrentStat
          key={spec.id}
          spec={spec}
          stat={data.properties[spec.id].value || -1}
        ></CityBlockCurrentStat>
      ) : null
    )}
  </>
);

export interface CityBlockCurrentProps {
  data?: StationObservation;

  status: QueryStatus;

  onRefetch: () => void | Promise<void>;
}

/**
 * Primary UI component for user interaction
 */
export const CityBlockCurrent: React.FC<CityBlockCurrentProps> = ({
  data,
  status,
  onRefetch,
  ...props
}) => {
  return (
    <div className="city-block-current box pl-0 pr-0" {...props}>
      <CityBlockCurrentTitle />
      {data ? (
        <DataRows data={data} />
      ) : (
        <DataPlaceholder onRefetch={onRefetch} status={status} />
      )}
    </div>
  );
};
