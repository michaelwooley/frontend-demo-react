import React from "react";
import { QueryStatus } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import { useWeatherLatest, useWeatherHistorical } from "./index";

const stationId = "KBVI";

const WeatherWrapper: React.FC<{
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  status: QueryStatus;
  updatedAt: number;
  onFetch: () => void;
  onRemove: () => void;
}> = ({ title, data, status, updatedAt, onFetch, onRemove }) => {
  return (
    <>
      <div className="container">
        <div className="content">
          <h2 className="title h2">{title}</h2>
          <h3 className="subtitle h3">Weather API Demo</h3>
          <p>
            Updated at{" "}
            <span className="has-text-weight-bold">
              {new Date(updatedAt).toISOString()}
            </span>
          </p>
          <p>
            Status: <span className="has-text-weight-bold">{status}</span>
          </p>
          <p>This story will not work on firefox.</p>
        </div>
        <hr></hr>
        <div className="buttons">
          <button className="button" onClick={onFetch}>
            Fetch data
          </button>
          <button className="button" onClick={onRemove}>
            Remove data
          </button>
        </div>

        <hr />
        {data ? (
          <code>{JSON.stringify(data)}</code>
        ) : (
          <div className="has-text-italic">No data loaded</div>
        )}
      </div>
      <ReactQueryDevtools initialIsOpen></ReactQueryDevtools>
    </>
  );
};

export const WeatherLatestDemo: React.FC = () => {
  const { data, refetch, remove, status, error, updatedAt } = useWeatherLatest(
    stationId
  );

  if (error) {
    console.error(error);
  }

  return (
    <WeatherWrapper
      title="Latest weather"
      data={data}
      status={status}
      onFetch={refetch}
      onRemove={remove}
      updatedAt={updatedAt}
    ></WeatherWrapper>
  );
};

export const WeatherHistoricalDemo: React.FC = () => {
  const {
    data,
    refetch,
    remove,
    status,
    error,
    updatedAt,
  } = useWeatherHistorical(stationId);

  if (error) {
    console.error(error);
  }

  return (
    <WeatherWrapper
      title="Historical weather"
      data={data}
      status={status}
      onFetch={refetch}
      onRemove={remove}
      updatedAt={updatedAt}
    ></WeatherWrapper>
  );
};
