export type IStationName = {
  id: string;
  city: string;
  name: string;
};

export const STATIONS: IStationName[] = [
  {
    id: "KLUK",
    city: "Cincinnati, OH",
    name: "Cincinnati Municipal Airport Lunken Field",
  },
  {
    id: "KIND",
    name: "Indianapolis International Airport",
    city: "Indianapolis, IN",
  },
  {
    id: "KSDF",
    name: "Louisville, Standiford Field",
    city: "Louisville, KY",
  },
  {
    id: "KLEX",
    name: "Lexington Blue Grass Airport",
    city: "Lexington, KY",
  },
];
