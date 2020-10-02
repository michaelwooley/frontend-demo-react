// import the library
import { library, dom } from "@fortawesome/fontawesome-svg-core";

// import your icons
import {
  faCloud,
  faCity,
  faChevronDown,
  faChevronUp,
  faChartLine,
  faTemperatureHigh,
  faMountain,
  faCompass,
  faWind,
  faWeightHanging,
  faEye,
  faTemperatureLow,
  faCloudRain,
  faGrinBeamSweat,
  faIcicles,
  faFire,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCloud,
  faCity,
  faChevronDown,
  faChevronUp,
  faChartLine,

  faTemperatureHigh,
  faMountain,
  faCompass,
  faWind,
  faWeightHanging,
  faEye,
  faTemperatureLow,
  faCloudRain,
  faGrinBeamSweat,
  faIcicles,
  faFire
);

// Replaces <i /> elements with svg.
dom.watch();
