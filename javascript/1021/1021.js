// var input = require("fs").readFileSync("/dev/stdin", "utf8");
var input = "576.73";
var lines = input.split("\n");

let entry = Number(lines[0]);
let notas = [100, 50, 20, 10, 5, 2, 1, 0.5, 0.25, 0.1, 0.5, 0.01];
let manyNote = [];
// console.log(entry);

for (let i = 0; i < notas.length; i++) {
  if (entry > notas[i]) {
    manyNote[i] = manyNotes(entry, notas[i]);
    entry = entry % notas[i];
  }

  //   if()
  console.log(entry);
}

console.log(manyNote);

function manyNotes(num, note) {
  return Math.floor(num / note);
}
