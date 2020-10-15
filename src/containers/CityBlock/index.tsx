import React, { useState } from "react";
import { IStationName } from "common/data/stations";
import { CityBlock as CityBlockComponent } from "components/CityBlock";

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
