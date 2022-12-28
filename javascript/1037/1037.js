var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let entry = Number(lines[0]);

if (entry >= 0 && entry <= 25) {
  console.log("Intervalo [0,25]");
} else if (entry > 25 && entry <= 50) {
  console.log("Intervalo (25,50]");
} else if (entry > 50 && entry <= 75) {
  console.log("Intervalo (50,75]");
} else if (entry > 75 && entry <= 100) {
  console.log("Intervalo (75,100]");
} else {
  console.log("Fora de intervalo");
}
