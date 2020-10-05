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
  faEnvelope,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

import {
  faTwitter,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

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
  faFire,
  faEnvelope,
  faTwitter,
  faFacebook,
  faLinkedin,
  faPlus
);

// Replaces <i /> elements with svg.
dom.watch();
