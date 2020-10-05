import { ModalsContext } from "common/context";
import { CityConfigModal as CityConfigModalComponent } from "components/CityConfigModal";
import React, { useContext } from "react";

export const CityConfigModal: React.FC = () => {
  const {
    toggle,
    modals: { cities: isOpen },
  } = useContext(ModalsContext);

  return (
    <CityConfigModalComponent
      isOpen={isOpen}
      onToggle={() => toggle("cities")}
      leftChild={
        <div className="box" style={{ height: "150vh" }}>
          Left side is tight <br /> (150vh)
        </div>
      }
      rightChild={<div className="box">Right side</div>}
    />
  );
};
