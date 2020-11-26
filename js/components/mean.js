// pagrindinė kviečiama funkcija
import { numberAmount } from "./numberAmount.js";
import { arraySum } from "./summation.js";
import { isArrayValid, isNumberProper } from "./validation.js";

function mean (numberArray) {
    if (!isArrayValid (numberArray)) {
        return false;
    }
    const sum = arraySum (numberArray);
    const amount = numberAmount (numberArray);

    const mean = sum / amount;
    
    if (!isNumberProper (mean, "resulting mean value of numbers in the array")) {
        return false;
    }

    return mean;
}

export { mean }