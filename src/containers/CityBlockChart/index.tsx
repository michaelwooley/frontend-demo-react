import { IStationName } from "common/data/stations";
import {
  IWeatherStatSpec,
  WEATHER_STAT_SPEC,
  WEATHER_UNITS,
} from "common/weather";
import { CityBlockChart as CityBlockChartComponent } from "components/CityBlockChart";
import CityBlockTimeSeries from "containers/CityBlockTimeSeries";
import React, { useState } from "react";
import { useWeatherHistorical } from "services/weather/index";

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
  const unit = WEATHER_UNITS[activeSeries.unit];

  // TODO Enable use of modal and info elements
  const handleFullScreen = () => setIsFullScreen((v) => !v);
  const handleShowInfo = () => setShowInfo((v) => !v);
  const handleChangeActiveSeries = (spec: IWeatherStatSpec) => {
    setActiveSeries(spec);
  };

  return (
    <CityBlockChartComponent
      specs={WEATHER_STAT_SPEC}
      activeSeries={activeSeries}
      onSeriesSelect={handleChangeActiveSeries}
      onInfo={handleShowInfo}
      onFullScreen={handleFullScreen}
      {...props}
    >
      {data && (
        <CityBlockTimeSeries data={data} spec={activeSeries} unit={unit} />
      )}
    </CityBlockChartComponent>
  );
};

export default CityBlockChart;
