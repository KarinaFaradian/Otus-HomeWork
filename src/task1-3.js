const prompt = require("prompt-sync")();
const num = prompt('Enter number');

const thirdNum = num % 10;
const firstNum = (num - (num % 100)) / 100;
const secondNum = (num - (firstNum * 100) - thirdNum) / 10;
const sum = firstNum + secondNum + thirdNum;

console.log(sum);

module.exports = console;