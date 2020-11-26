import { isArrayValid, isNumberProper } from "./validation.js";

function numberAmount (numberArray) {
    if (!isArrayValid (numberArray)) {
        return false;
    }


    let amount = 0;

    for (let i = 0; i < numberArray.length; i++) {
        const number = numberArray[i];
        if (typeof number !== 'number') {
            continue;
        }
        amount++;
    }

    if (!isNumberProper (amount, "resulting amount of numbers in the array")) {
    return false;
    }

    return amount;
}