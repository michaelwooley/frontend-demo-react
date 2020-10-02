import { IModalNames, ModalsContext } from "common/context";
import React, { useState } from "react";

export const ModalsProvider: React.FC = ({ ...props }) => {
  const [modals, setModals] = useState<IModalNames>({ cities: false });

  const toggle = (k: keyof IModalNames) =>
    setModals((m) => ({ ...m, [k]: !m[k] }));
  const context = { modals, toggle };

  return (
    <ModalsContext.Provider value={context}>
      {props.children}
    </ModalsContext.Provider>
  );
};
