import { ModalsContext, StationsContext } from "common/context";
import { CityAdd } from "components/CityAdd";
import { CityConfigModal as CityConfigModalComponent } from "components/CityConfigModal";
import { CityOrder } from "components/CityOrder";
import React, { useContext, useMemo } from "react";
import { STATIONS } from "common/data/stations";

export const CityConfigModal: React.FC = () => {
  const {
    toggle,
    modals: { cities: isOpen },
  } = useContext(ModalsContext);
  const { stations, onAdd, onRemove, onMoveUp, onMoveDown } = useContext(
    StationsContext
  );

  const unusedStations = useMemo(
    () => STATIONS.filter((s) => stations.every((s_) => s_.id !== s.id)),
    [stations]
  );

  return (
    <CityConfigModalComponent
      isOpen={isOpen}
      onToggle={() => toggle("cities")}
      leftChild={<CityAdd stations={unusedStations} onAdd={onAdd} />}
      rightChild={
        <CityOrder
          stations={stations}
          onRemove={onRemove}
          onMoveUp={onMoveUp}
          onMoveDown={onMoveDown}
        />
      }
    />
  );
};
