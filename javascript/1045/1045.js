var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(" ");

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let entries = lines
  .map((e) => {
    return parseFloat(e);
  })
  .sort(compare);

const [a, b, c] = entries;
const notTriangle = a >= b + c;
const rectTriangle = Math.pow(a, 2) === Math.pow(b, 2) + Math.pow(c, 2);
const obtusangleTriangle = Math.pow(a, 2) > Math.pow(b, 2) + Math.pow(c, 2);
const acutangleTriangle = Math.pow(a, 2) < Math.pow(b, 2) + Math.pow(c, 2);
const equilateralTriangle = a === b && a === c;
const isocelesTriangle = a === b || b === c;

if (notTriangle) {
  console.log("NAO FORMA TRIANGULO");
} else if (rectTriangle) {
  console.log("TRIANGULO RETANGULO");
} else if (obtusangleTriangle) {
  console.log("TRIANGULO OBTUSANGULO");
} else if (acutangleTriangle) {
  console.log("TRIANGULO ACUTANGULO");
}

if (equilateralTriangle && !notTriangle) {
  console.log("TRIANGULO EQUILATERO");
} else if (isocelesTriangle && !notTriangle) {
  console.log("TRIANGULO ISOSCELES");
}

function compare(a, b) {
  return b - a;
}
