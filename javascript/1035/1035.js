var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");
let entries = input.split(" ");

// variáveis ainda em string
const [a, b, c, d] = entries;

// 1o passo ver se b > c
function isGreater(x, y) {
  return Number(x) > Number(y);
}

function isPositive(a) {
  return a > 0;
}

function isEven(a) {
  return a % 2 == 0;
}

if (
  isGreater(b, c) &&
  isGreater(d, a) &&
  isGreater(c + d, a + b) &&
  isPositive(c) &&
  isPositive(d) &&
  isEven(a)
) {
  console.log("Valores aceitos");
} else {
  console.log("Valores nao aceitos");
}
