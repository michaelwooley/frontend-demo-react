import { ModalsContext } from "common/context";
import { Nav as NavComponent } from "components/Nav";
import React, { useContext, useState } from "react";

export const Nav: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const { toggle } = useContext(ModalsContext);

  return (
    <NavComponent
      isActive={isActive}
      onToggleActive={() => setIsActive((s) => !s)}
      onToggleCities={() => toggle("cities")}
    ></NavComponent>
  );
};
