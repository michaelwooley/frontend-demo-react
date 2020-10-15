import { IStationName } from "common/data/stations";
import { CityBlockCurrent as CityBlockCurrentComponent } from "components/CityBlockCurrent";
import React from "react";
import { useWeatherLatest } from "../../services/weather/index";

export interface CityBlockCurrentProps {
  /**
   * Info about the station that was selected
   */
  station: IStationName;

  /**
   * Index number/order of station in block
   */
  idx: number;
}

export const CityBlockCurrent: React.FC<CityBlockCurrentProps> = ({
  station,
  idx,
  ...props
}) => {
  const {
    data,
    status,
    updatedAt,
    isError,
    isFetched,
    isFetching,
    isLoading,
    isStale,
    isSuccess,
    isPreviousData,
  } = useWeatherLatest(station.id);

  console.log({
    data,
    status,
    updatedAt,
    isError,
    isFetched,
    isFetching,
    isLoading,
    isStale,
    isSuccess,
    isPreviousData,
  });

  // TODO Import data to be passed down

  return data ? <CityBlockCurrentComponent data={data} {...props} /> : null;
};

/*
    canFetchMore: boolean | undefined;
    clear: () => void;
    data: TResult | undefined;
    error: TError | null;
    failureCount: number;
    fetchMore: (fetchMoreVariable?: unknown, options?: FetchMoreOptions) => Promise<TResult | undefined>;
    isError: boolean;
    isFetched: boolean;
    isFetchedAfterMount: boolean;
    isFetching: boolean;
    isFetchingMore?: IsFetchingMoreValue;
    isIdle: boolean;
    isInitialData: boolean;
    isLoading: boolean;
    isPreviousData: boolean;
    isStale: boolean;
    isSuccess: boolean;
    refetch: (options?: RefetchOptions) => Promise<TResult | undefined>;
    remove: () => void;
    status: QueryStatus;
    updatedAt: number;
*/
