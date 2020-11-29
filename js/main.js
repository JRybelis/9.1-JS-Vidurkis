import {numberData1} from "./data/data1.js";
import {numberData2} from "./data/data2.js";
import { mean } from "./components/mean.js";
import { numberAmount } from "./components/numberAmount.js";
import { answerPrint } from "./components/answerPrint.js";

const result1 = mean (numberData1);
const result2 = mean (numberData2);

// Iš y pateiktų skaičių, vidurkis gaunasi x. 
const answerstring1 = mean(numberData1);
const answerstring2 = mean(numberData2);

const result1DOM = document.querySelector("#result1");
const result2DOM = document.querySelector("#result2");

result1DOM.innerText = answerPrint ( numberData1, answerstring1);
result2DOM.innerText = answerPrint(numberData2, answerstring2);
