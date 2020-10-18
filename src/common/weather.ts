export type IWeatherUnit = { link?: string; name: string; abbrev: string };

export enum WEATHER_UNIT_KEYS {
  degF = "degF",
  degC = "degC",
  degree_angle = "degree_(angle)",
  km_h_1 = "km_h-1",
  Pa = "Pa",
  m = "m",
  inch = "inch",
  percent = "percent",
}

export const WEATHER_UNITS: { [k in WEATHER_UNIT_KEYS]: IWeatherUnit } = {
  degF: {
    link: undefined,
    name: "Degrees Fahrenheit",
    abbrev: "˚ F",
  },
  degC: {
    link: "http://codes.wmo.int/common/unit/degC",
    name: "Degrees Celsius",
    abbrev: "˚ C",
  },
  "degree_(angle)": {
    link: "http://codes.wmo.int/common/unit/degree_(angle)",
    name: "Degrees (angle)",
    abbrev: "˚",
  },
  "km_h-1": {
    link: "http://codes.wmo.int/common/unit/km_h-1",
    name: "Kilometers per hour",
    abbrev: "kph",
  },
  Pa: {
    link: "http://codes.wmo.int/common/unit/Pa",
    name: "Pascals",
    abbrev: "Pa",
  },
  m: {
    link: "http://codes.wmo.int/common/unit/m",
    name: "Meters",
    abbrev: "m",
  },
  inch: {
    link: undefined,
    name: "Inches",
    abbrev: "in.",
  },
  percent: {
    link: "http://codes.wmo.int/common/unit/percent",
    name: "Percent",
    abbrev: "%",
  },
};

export enum WEATHER_STAT_KEYS {
  temperature = "temperature",
  dewpoint = "dewpoint",
  windDirection = "windDirection",
  windSpeed = "windSpeed",
  windGust = "windGust",
  barometricPressure = "barometricPressure",
  seaLevelPressure = "seaLevelPressure",
  visibility = "visibility",
  maxTemperatureLast24Hours = "maxTemperatureLast24Hours",
  minTemperatureLast24Hours = "minTemperatureLast24Hours",
  precipitationLastHour = "precipitationLastHour",
  precipitationLast3Hours = "precipitationLast3Hours",
  precipitationLast6Hours = "precipitationLast6Hours",
  relativeHumidity = "relativeHumidity",
  windChill = "windChill",
  heatIndex = "heatIndex",
}

export type IWeatherStatSpec = {
  id: WEATHER_STAT_KEYS;
  unit: WEATHER_UNIT_KEYS;
  description: string;
  name: string;
  abbrev: string;
  icon: string;
  isDefault: boolean;
  color: string;
};

export const WEATHER_STAT_SPEC: IWeatherStatSpec[] = [
  {
    id: WEATHER_STAT_KEYS.temperature,
    unit: WEATHER_UNIT_KEYS.degC,
    description: "Air temperature.",
    name: "Temperature",
    abbrev: "Temp",
    icon: "fas fa-temperature-high",
    isDefault: true,
    color: "#008FFB",
  },
  {
    id: WEATHER_STAT_KEYS.dewpoint,
    unit: WEATHER_UNIT_KEYS.degC,
    description:
      "A measure of atmospheric moisture. It is the temperature to which air must be cooled in order to reach saturation (assuming air pressure and moisture content are constant). A higher dew point indicates more moisture present in the air. It is sometimes referred to as Dew Point Temperature, and sometimes written as one word (Dewpoint).",
    name: "Dew point",
    abbrev: "Dew",
    icon: "fas fa-mountain",
    isDefault: true,
    color: "#00E396",
  },
  {
    id: WEATHER_STAT_KEYS.windDirection,
    unit: WEATHER_UNIT_KEYS.degree_angle,
    description:
      "The true direction \u003Cb\u003Efrom which\u003C/b\u003E the wind is blowing at a given location (i.e., wind blowing from the north to the south is a north wind). It is normally measured in tens of degrees from 10 degrees clockwise through 360 degrees. North is 360 degrees. A wind direction of 0 degrees is only used when wind is calm.",
    name: "Wind direction",
    abbrev: "Wind dir.",
    icon: "fas fa-compass",
    isDefault: false,
    color: "#FEB019",
  },
  {
    id: WEATHER_STAT_KEYS.windSpeed,
    unit: WEATHER_UNIT_KEYS.km_h_1,
    description:
      "The rate at which air is moving horizontally past a given point. It may be a 2-minute average speed (reported as wind speed) or an instantaneous speed (reported as a peak wind speed, wind gust, or squall).",
    name: "Wind speed",
    abbrev: "Wind",
    icon: "fas fa-wind",
    isDefault: true,
    color: "#FF4560",
  },
  {
    id: WEATHER_STAT_KEYS.windGust,
    unit: WEATHER_UNIT_KEYS.km_h_1,
    description:
      "Rapid fluctuations in the wind speed with a variation of 10 knots or more between peaks and lulls. The speed of the gust will be the maximum instantaneous wind speed.",
    name: "Wind gust",
    abbrev: "Wind gust",
    icon: "fas fa-wind",
    isDefault: false,
    color: "#775DD0",
  },
  {
    id: WEATHER_STAT_KEYS.barometricPressure,
    unit: WEATHER_UNIT_KEYS.Pa,
    description: "The pressure of the atmosphere as indicated by a barometer.",
    name: "Barometric pressure",
    abbrev: "Pressure",
    icon: "fas fa-weight-hanging",
    isDefault: true,
    color: "#3f51b5",
  },
  {
    id: WEATHER_STAT_KEYS.seaLevelPressure,
    unit: WEATHER_UNIT_KEYS.Pa,
    description:
      "The sea level pressure is the atmospheric pressure at sea level at a given location. When observed at a reporting station that is not at sea level (nearly all stations), it is a correction of the \u003Cb\u003Estation pressure\u003C/b\u003E to sea level. This correction takes into account the standard variation of pressure with height and the influence of temperature variations with height on the pressure. The temperature used in the sea level correction is a twelve hour mean, eliminating diurnal effects. Once calculated, horizontal variations of sea level pressure may be compared for location of high and low pressure areas and fronts.",
    name: "Sea level pressure",
    abbrev: "Pressure (Sea)",
    icon: "fas fa-weight-hanging",
    isDefault: false,
    color: "#03a9f4",
  },
  {
    id: WEATHER_STAT_KEYS.visibility,
    unit: WEATHER_UNIT_KEYS.m,
    description:
      "The distance at which a given standard object can be seen and identified with the unaided eye",
    name: "Visibility",
    abbrev: "Viz",
    icon: "fas fa-eye",
    isDefault: true,
    color: "#4caf50",
  },
  {
    id: WEATHER_STAT_KEYS.maxTemperatureLast24Hours,
    unit: WEATHER_UNIT_KEYS.degC,
    description:
      "Maximum temperature in last 24 hours. The temperature is a measure of the internal energy that a substance contains. This is the most measured quantity in the atmosphere.",
    name: "Max temperature (24h)",
    abbrev: "Max Temp.",
    icon: "fas fa-temperature-high",
    isDefault: false,
    color: "#f9ce1d",
  },
  {
    id: WEATHER_STAT_KEYS.minTemperatureLast24Hours,
    unit: WEATHER_UNIT_KEYS.degC,
    description:
      "Minimum temperature in last 24 hours. The temperature is a measure of the internal energy that a substance contains. This is the most measured quantity in the atmosphere.",
    name: "Min temperature (24h)",
    abbrev: "Min Temp.",
    icon: "fas fa-temperature-low",
    isDefault: false,
    color: "#FF9800",
  },
  {
    id: WEATHER_STAT_KEYS.precipitationLastHour,
    unit: WEATHER_UNIT_KEYS.m,
    description:
      "Total precipitation in the last hour. Total precipitation in the last six hours. The process where water vapor condenses in the atmosphere to form water droplets that fall to the Earth as rain, sleet, snow, hail, etc.",
    name: "Precipitation in last hour",
    abbrev: "Rain",
    icon: "fas fa-cloud-rain",
    isDefault: true,
    color: "#33b2df",
  },
  {
    id: WEATHER_STAT_KEYS.precipitationLast3Hours,
    unit: WEATHER_UNIT_KEYS.m,
    description:
      "Total precipitation in the last three hours. The process where water vapor condenses in the atmosphere to form water droplets that fall to the Earth as rain, sleet, snow, hail, etc.",
    name: "Precipitation in last three hours",
    abbrev: "Rain (3h)",
    icon: "fas fa-cloud-rain",
    isDefault: false,
    color: "#546E7A",
  },
  {
    id: WEATHER_STAT_KEYS.precipitationLast6Hours,
    unit: WEATHER_UNIT_KEYS.m,
    description:
      "Total precipitation in the last six hours. The process where water vapor condenses in the atmosphere to form water droplets that fall to the Earth as rain, sleet, snow, hail, etc.",
    name: "Precipitation in last six hours",
    abbrev: "Rain (6h)",
    icon: "fas fa-cloud-rain",
    isDefault: false,
    color: "#d4526e",
  },
  {
    id: WEATHER_STAT_KEYS.relativeHumidity,
    unit: WEATHER_UNIT_KEYS.percent,
    description:
      "A dimensionless ratio, expressed in percent, of the amount of atmospheric moisture present relative to the amount that would be present if the air were saturated. Since the latter amount is dependent on temperature, relative humidity is a function of both moisture content and temperature. As such, relative humidity by itself does not directly indicate the actual amount of atmospheric moisture present. See dew point.",
    name: "Relative humidity",
    abbrev: "Humidity",
    icon: "fas fa-grin-beam-sweat",
    isDefault: true,
    color: "#13d8aa",
  },
  {
    id: WEATHER_STAT_KEYS.windChill,
    unit: WEATHER_UNIT_KEYS.degC,
    description:
      "Reference to the \u003Cb\u003EWind Chill Factor\u003C/b\u003E; increased wind speeds accelerate heat loss from exposed skin, and the wind chill is a measure of this effect. No specific rules exist for determining when wind chill becomes dangerous. As a general rule, the threshold for potentially dangerous wind chill conditions is about -20\u00c2\u00b0F.",
    name: "Wind chill",
    abbrev: "Wind chill",
    icon: "fas fa-icicles",
    isDefault: true,
    color: "#A5978B",
  },
  {
    id: WEATHER_STAT_KEYS.heatIndex,
    unit: WEATHER_UNIT_KEYS.degC,
    description:
      "The Heat Index (HI) or the \u0022Apparent Temperature\u0022 is an accurate measure of how hot it really feels when the Relative Humidity (RH) is added to the actual air temperature.",
    name: "Heat index",
    abbrev: "Heat index",
    icon: "fas fa-fire",
    isDefault: true,
    color: "#4ecdc4",
  },
];
