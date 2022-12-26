// var input = require("fs").readFileSync("/dev/stdin", "utf8");
var input = "4";
var lines = input.split("\n");

let entry = Number(lines[0]);
let notas = [
  100.0,
  50.0,
  20.0,
  10.0,
  5,
  2,
  1,
  "0.50",
  0.25,
  "0.10",
  0.05,
  0.01,
];
let manyNote = [];
// console.log(entry);

for (let i = 0; i < notas.length; i++) {
  if (entry > notas[i]) {
    manyNote[i] = manyNotes(entry, notas[i]);

    entry = entry % notas[i];
  } else {
    manyNote[i] = 0;
  }
  if (i === 0) {
    console.log(`NOTAS:`);
  } else if (i == 6) {
    console.log(`MOEDAS:`);
  }
  console.log(
    `${manyNote[i]} ${i < 6 ? "nota" : "moeda"}(s) de R$ ${notas[i]}${
      i < 7 ? ".00" : ""
    }`
  );
}

function manyNotes(num, note) {
  return Math.floor(num.toFixed(2) / Number(note).toFixed(2));
}
