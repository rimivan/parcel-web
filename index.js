require('js-logger').useDefaults();
import { hElementInDocument } from "./src/scripts/script-1";
import * as textData from "./src/scripts/script-2";


console.log("Start ");
	hElementInDocument();
console.log("End");

console.log("Start 2");
	textData.createTextElement();
console.log("End 2");

