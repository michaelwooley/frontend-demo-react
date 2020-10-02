// import the library
import { library, dom } from "@fortawesome/fontawesome-svg-core";

// import your icons
import {
  faCloud,
  faCity,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

library.add(faCloud, faCity, faChevronDown, faChevronUp);

// Replaces <i /> elements with svg.
dom.watch();
