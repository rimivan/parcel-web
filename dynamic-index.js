import * as React from 'react';
import ReactDOM from 'react-dom';
import { Clock } from './src/react-components/Clock';
/**
 * Parcel dynamic import resolving promise with then  
 */
console.log("Script #1 ");
import('./src/scripts/script-1')
    .then( script_1 => {
        script_1.hElementInDocument();
    });
console.log("End #1");

/**
 * Parcel dynamic import resolving promise with async/await  
 */
console.log("Script #2 ");
const callScript_2 = async () => {
    const script_2 = await import('./src/scripts/script-2');
    script_2.createTextElement();
}
callScript_2();
console.log("End #2");

const reactHook = document.querySelector('#react-hook');
const element = (
    <div>
      <h2>React Element -> {new Date().toLocaleTimeString()}.</h2>
    </div>
);

ReactDOM.render(<Clock/>, reactHook);
