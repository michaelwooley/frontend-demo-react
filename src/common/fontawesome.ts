// import the library
import { library, dom } from "@fortawesome/fontawesome-svg-core";

// import your icons
import { faCloud, faCity } from "@fortawesome/free-solid-svg-icons";

library.add(faCloud, faCity);

// Replaces <i /> elements with svg.
dom.watch();
