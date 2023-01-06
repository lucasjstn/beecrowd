var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(" ");

const entries = lines.map((element) => {
  return Number(element);
});

const [initialHour, finalHour] = entries;

console.log(16 - 24);
// console.log(initialHour, finalHour);
// Hora inicial 0 - 16 = -8
// Hora final   2 - 0   = 2

// Hora inicial 0 - 0 = 0
// Hora final   24 - 0 = 24

// Hora inicial 0 - 2 = -2
// Hora final   16 - 0 = 16
