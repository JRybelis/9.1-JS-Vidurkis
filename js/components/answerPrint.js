import { numberAmount } from "./numberAmount.js";

function answerPrint (numberArray, mean) {
    let amount = numberAmount(numberArray);

    return `The mean of the given ${amount} numbers is ${mean}.`;
}

export  { answerPrint } 