// import the library
import { library, dom } from "@fortawesome/fontawesome-svg-core";

// import your icons
import { faCode, faHighlighter } from "@fortawesome/free-solid-svg-icons";

library.add(faCode, faHighlighter);

// Replaces <i /> elements with svg.
dom.watch();
