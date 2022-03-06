import "../styles/styles.css";
// Import from Named Exports
// See: https://www.w3schools.com/js/js_modules.asp
import { greta } from "./modules/greta";

greta();

// If hot is set to true inside module...
if (module.hot) {
  module.hot.accept();
}
