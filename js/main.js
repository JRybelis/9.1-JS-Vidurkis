import {numberData1} from "./data/data1.js";
import {numberData2} from "./data/data2.js";
import { mean } from "./components/mean.js";

const result1 = mean (numberData1);
const result2 = mean (numberData2);

// Iš y pateiktų skaičių, vidurkis gaunasi x. 
const answerstring1 = `The mean value of the given ${numberData1.length} numbers in the array is ${result1}.`;
const answerstring2 = `The mean value of the given ${numberData2.length} numbers in the array is ${result2}.`;

const result1DOM = document.querySelector("#result1");
const result2DOM = document.querySelector("#result2");

result1DOM.innerText = answerstring1;
result2DOM.innerText = answerstring2;


