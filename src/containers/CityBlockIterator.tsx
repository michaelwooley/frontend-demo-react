import { StationsContext } from "common/context";
import { CityBlockPlaceholder } from "components/CityBlockPlaceholder";
import { CityBlock } from "containers/CityBlock";
import React, { useContext } from "react";
import { ModalsContext } from "common/context";

export const CityBlockIterator: React.FC = () => {
  const { stations } = useContext(StationsContext);
  const { toggle } = useContext(ModalsContext);

  return (
    <div className="pt-4">
      {stations.length > 0 ? (
        <>
          {stations.map((station, idx) => (
            <CityBlock key={station.id} station={station} idx={idx}></CityBlock>
          ))}
          <CityBlockPlaceholder
            title="Add or edit your cities"
            description="Click here to edit"
            icon="fas fa-edit"
            expand={false}
            inline={true}
            onToggle={() => toggle("cities")}
          ></CityBlockPlaceholder>
        </>
      ) : (
        <CityBlockPlaceholder
          title="No cities selected!"
          description="Click here to add cities"
          icon="fas fa-search-location"
          expand={true}
          inline={false}
          onToggle={() => toggle("cities")}
        ></CityBlockPlaceholder>
      )}
    </div>
  );
};
