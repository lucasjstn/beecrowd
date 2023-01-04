var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(" ");

const entries = lines.map((element) => {
  return parseFloat(element);
});

const [a, b, c] = entries;

const somaLados = a < b + c;
const valorAbsolutoLados = a > Math.abs(b - c); // console.log(somaLados);

if (valorAbsolutoLados && somaLados) {
  console.log(Perimetro(a, b, c));
} else {
  console.log(AreaTrapezio(a, b, c));
}

function AreaTrapezio(a, b, c) {
  return `Area = ${(((a + b) * c) / 2).toFixed(1)}`;
}

function Perimetro(a, b, c) {
  return `Perimetro = ${(a + b + c).toFixed(1)}`;
}
