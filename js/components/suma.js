//  skaičiuoja masyvo skaičių sumą
import {numberData} from "./data.js";

function arraySum (data) {
// input validation
    if (!Array.isArray(data)) {
        console.error("Error: the information supplied is not of array type.");
        return false;
    }
    if (data.length === 0) {
        console.error("Error: the array supplied is empty");
        return false;
    }

// logic
let sum = '';

for (let i = 0; i < data.length; i++) {
    const integer = data[i];
    if (typeof integer !== 'object') {
        continue;
    }
    if (typeof integer.number !== 'number') {
        continue;
    }
    if (typeof integer.number === Infinity || integer.number === NaN || integer.number === -Infinity) {
        continue;
    }
    sum += integer
}
}