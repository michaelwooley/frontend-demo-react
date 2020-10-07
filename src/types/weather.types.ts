type WeatherApiContext = (string | Record<string, unknown>)[];

type WeatherStat<V extends number | null = number> = {
  value: V;
  unitCode: string;
  qualityControl: null | string;
};

export interface StationObservation {
  id: string;
  type: "Feature";
  geometry: {
    type: "Point";
    coordinates: number[];
  };
  properties: {
    "@id": string;
    "@type": string;
    elevation: {
      value: 382;
      unitCode: string;
    };
    station: string;
    timestamp: string;
    rawMessage: string;
    textDescription: string;
    icon: string;
    presentWeather: [];
    temperature: WeatherStat;
    dewpoint: WeatherStat;
    windDirection: WeatherStat;
    windSpeed: WeatherStat;
    windGust: WeatherStat<number | null>;
    barometricPressure: WeatherStat;
    seaLevelPressure: WeatherStat<number | null>;
    visibility: WeatherStat;
    maxTemperatureLast24Hours: WeatherStat<number | null>;
    minTemperatureLast24Hours: WeatherStat<number | null>;
    precipitationLastHour: {
      value: number | null;
      unitCode: string;
      qualityControl: string;
    };
    precipitationLast3Hours: WeatherStat<number | null>;
    precipitationLast6Hours: WeatherStat<number | null>;
    relativeHumidity: WeatherStat;
    windChill: WeatherStat<number | null>;
    heatIndex: WeatherStat;
    cloudLayers: [
      {
        base: {
          value: number | null;
          unitCode: string;
        };
        amount: string;
      }
    ];
  };
}

/**
 * Response from: https://api.weather.gov/stations/:station/observations/latest
 */
export interface WeatherApiStationObservationLatest extends StationObservation {
  context: WeatherApiContext;
}

/**
 * Response from: https://api.weather.gov/stations/:station/observations?start={Date}&end={Date}&limit={number:50}
 */
export interface WeatherApiStationObservations {
  context: WeatherApiContext;
  type: "FeatureCollection";
  features: StationObservation[];
}
