import React from "react";

export type IModalNames = { cities: boolean };

export type IModalsContext = {
  modals: IModalNames;
  toggle: (k: keyof IModalNames) => void;
};

export const ModalsContext = React.createContext<IModalsContext>({
  modals: {
    cities: false,
  },
  toggle: (k: keyof IModalNames) => null,
});
