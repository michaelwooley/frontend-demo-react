import { IStationName } from "common/data/stations";
import { CityBlockCurrent as CityBlockCurrentComponent } from "components/CityBlockCurrent";
import React from "react";
import { useWeatherLatest } from "services/weather/index";

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

const CityBlockCurrent: React.FC<CityBlockCurrentProps> = ({
  station,
  idx,
  ...props
}) => {
  const { data, status, updatedAt, refetch } = useWeatherLatest(station.id);

  // TODO Add data freshness info
  console.log("Data last updated at:", new Date(updatedAt));

  const handleRefetch = async () => {
    refetch();
  };

  return (
    <CityBlockCurrentComponent
      data={data}
      status={status}
      onRefetch={handleRefetch}
      {...props}
    />
  );
};

export default CityBlockCurrent;
