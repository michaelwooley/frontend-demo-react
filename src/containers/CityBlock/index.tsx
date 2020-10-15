import { IStationName } from "common/data/stations";
import { CityBlock as CityBlockComponent } from "components/CityBlock";
import CityBlockCurrent from "containers/CityBlockCurrent";
import React, { useState } from "react";

export interface CityBlockProps {
  /**
   * Info about the station that was selected
   */
  station: IStationName;

  /**
   * Index number/order of station in block
   */
  idx: number;
}

export const CityBlock: React.FC<CityBlockProps> = ({
  station,
  idx,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(idx === 0);

  return (
    <CityBlockComponent
      station={station}
      isOpen={isOpen}
      onToggleOpen={() => setIsOpen((s) => !s)}
      currentComponent={<CityBlockCurrent station={station} idx={idx} />}
      // TODO Add chart component
      chartComponent={<div className="box">chart</div>}
      // TODO Add Dropdown component
      {...props}
    />
  );
};

/*

  canFetchMore: boolean | undefined;
    clear: () = void;
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
    refetch: (options?: RefetchOptions) = Promise<
    remove: () = void;
    status: QueryStatus;
    updatedAt: number;
    */
