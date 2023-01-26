var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(" ");


const [initialHour, finalHour] = [0, 0];

console.log(`O JOGO DUROU ${24 - initialHour + finalHour} HORA(S)`);
// Hora inicial 0 - 16 = -8
// Hora final   2 - 0   = 2

// Hora final   24 - 0 = 24

// Hora inicial 0 - 2 = -2
