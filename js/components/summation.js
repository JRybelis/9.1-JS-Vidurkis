//  skaičiuoja masyvo skaičių sumą
import { isArrayValid, isNumberProper } from "./validation.js"

function arraySum (numberArray) {
// input validation
    if (!isArrayValid(numberArray)) {
        return false;
    }
    
// logic
    let sum = 0;

    for (let i = 0; i < numberArray.length; i++) {
        const number = numberArray[i];

        if (typeof number !== 'number') {
            console.warn ("WARNING: number array does not contain any integer type values.")
            continue;
        }
        
        sum += number;
    }
    if (!isNumberProper (sum, "resulting amount of numbers in the array")) {
        return false;
    }
    return sum;
}

export { arraySum }