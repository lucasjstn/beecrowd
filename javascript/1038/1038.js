const { parse } = require("path");

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let [code, quantity] = lines[0].split(/[^0-9]/);
/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

const foods = {
  1: 4.0,
  2: 4.5,
  3: 5.0,
  4: 2.0,
  5: 1.5,
};

function calculatePrice(code, quantity) {
  return parseFloat(foods[code]).toFixed(2) * parseFloat(quantity).toFixed(2);
}

console.log("Total: R$", calculatePrice(code, quantity).toFixed(2));
