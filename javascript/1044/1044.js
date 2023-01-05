var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(" ");

const entries = lines.map((e) => {
  return parseFloat(e);
});

const [a, b] = entries;
// console.log(b % a);

if (b % a == 0 || a % b == 0) {
  console.log("Sao Multiplos");
} else {
  console.log("Nao sao Multiplos");
}
