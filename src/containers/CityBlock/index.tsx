import React, { useState } from "react";
import { IStationName } from "common/data/stations";
import { CityBlock as CityBlockComponent } from "components/CityBlock";

export interface CityBlockProps {
  station: IStationName;
}

export const CityBlock: React.FC<CityBlockProps> = ({ station, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  // TODO Import data to be passed down

  return (
    <CityBlockComponent
      station={station}
      isOpen={isOpen}
      onToggleOpen={() => setIsOpen((s) => !s)}
      // TODO Add current component
      currentComponent={<div className="box">Current</div>}
      // TODO Add chart component
      chartComponent={<div className="box">Chart</div>}
      // TODO Add Dropdown component
      {...props}
    />
  );
};
