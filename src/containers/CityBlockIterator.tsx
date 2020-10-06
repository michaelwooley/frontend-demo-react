import { StationsContext } from "common/context";
import { CityBlock } from "containers/CityBlock";
import React, { useContext } from "react";

export const CityBlockIterator: React.FC = () => {
  const { stations } = useContext(StationsContext);

  return (
    <div className="pt-4">
      {stations.length > 0 ? (
        stations.map((station, idx) => (
          <CityBlock key={station.id} station={station} idx={idx}></CityBlock>
        ))
      ) : (
        <div>No cities selected</div>
      )}
    </div>
  );
};
