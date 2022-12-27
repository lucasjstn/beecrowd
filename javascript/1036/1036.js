var input = require("fs").readFileSync("stdin", "utf-8");
var lines = input.split("\n");

let entries = input.split(" ");
const [a, b, c] = entries;

function delta(a, b, c) {
  b = Number(b).toFixed(2);
  a = Number(a).toFixed(2);
  c = Number(c).toFixed(2);
  let d = (Math.pow(b, 2) - 4 * a * c).toFixed(2);
  return parseFloat(d);
}

function quadratic(a, b, c) {
  let r1 = ((-b + Math.sqrt(delta(a, b, c))) / (2 * a)).toFixed(5);
  let r2 = ((-b - Math.sqrt(delta(a, b, c))) / (2 * a)).toFixed(5);
  return [parseFloat(r1), parseFloat(r2)];
}

if (delta(a, b, c) >= 0 && Number(a) !== 0) {
  console.log(`R1 = ${quadratic(a, b, c)[0]}`);
  console.log(`R2 = ${quadratic(a, b, c)[1]}`);
} else {
  console.log("Impossivel calcular");
}
