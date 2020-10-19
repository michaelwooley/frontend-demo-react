import { IStationName } from "common/data/stations";
import {
  IWeatherStatSpec,
  WEATHER_STAT_SPEC,
  WEATHER_UNITS,
} from "common/weather";
import { CityBlockChart as CityBlockChartComponent } from "components/CityBlockChart";
import { CityBlockPlaceholder } from "components/CityBlockPlaceholder";
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
  const { data, statusTitle } = useWeatherHistorical(station.id, 50);
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
      showInfo={showInfo}
      showFullScreen={isFullScreen}
      onSeriesSelect={handleChangeActiveSeries}
      onInfo={handleShowInfo}
      onFullScreen={handleFullScreen}
      {...props}
    >
      {showInfo && (
        //  TODO Add info block to separate component
        <>
          <div className="content pt-0 pb-0 mt-0 mb-0 is-size-7">
            <p className="mt-1 mb-1">
              <span className="icon pr-2">
                <i className={activeSeries.icon}></i>
              </span>
              <span className="has-text-weight-bold pr-2">
                {activeSeries.name}.
              </span>{" "}
              <span className="is-italic">{activeSeries.description}</span>
            </p>
          </div>
        </>
      )}

      {data ? (
        <CityBlockTimeSeries data={data} spec={activeSeries} unit={unit} />
      ) : (
        <CityBlockPlaceholder
          title={statusTitle.title}
          description={statusTitle.message}
          icon={statusTitle.icon}
        />
      )}
    </CityBlockChartComponent>
  );
};

export default CityBlockChart;
