import { IStationName } from "common/data/stations";
import { CityBlockChart as CityBlockChartComponent } from "components/CityBlockChart";
import React, { useState } from "react";
import { useWeatherHistorical } from "services/weather/index";
import { IWeatherStatSpec, WEATHER_STAT_SPEC } from "common/weather";

export interface CityBlockChartProps {
  /**
   * Info about the station that was selected
   */
  station: IStationName;

  /**
   * Index number/order of station in block
   */
  idx: number;
}

const CityBlockChart: React.FC<CityBlockChartProps> = ({
  station,
  idx,
  ...props
}) => {
  const [showInfo, setShowInfo] = useState<boolean>(false);
  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [activeSeries, setActiveSeries] = useState<IWeatherStatSpec>(
    WEATHER_STAT_SPEC[0]
  );
  const { data, status, updatedAt } = useWeatherHistorical(station.id, 50);

  // const handleRefetch = async () => {
  //   refetch();
  // };

  // TODO Enable use of modal and info elements
  const handleFullScreen = () => setIsFullScreen((v) => !v);
  const handleShowInfo = () => setShowInfo((v) => !v);

  return (
    <CityBlockChartComponent
      specs={WEATHER_STAT_SPEC}
      activeSeries={activeSeries}
      onSeriesSelect={setActiveSeries}
      onInfo={handleShowInfo}
      onFullScreen={handleFullScreen}
      {...props}
    >
      {/* TODO Add actual chart to component */}
      <div className="box content">
        <p>{`Has data? ${data != null}`}</p>
        <p>{`Status: ${status}`}</p>
        <p>{`Last updated: ${new Date(updatedAt)}`}</p>
        <p>{`Is full screen? ${isFullScreen}`}</p>
        <p>{`Show info? ${showInfo}`}</p>
      </div>
    </CityBlockChartComponent>
  );
};

export default CityBlockChart;
