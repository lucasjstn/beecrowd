const { callbackify } = require("util");

var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

const weights = [2, 3, 4, 1];
const grades = lines[0].split(" ").map((element) => {
  return parseFloat(element);
});

const finalGrade = parseFloat(lines[1]);

const calculatedAverage = weightedAverage(grades, weights);

console.log("Media:", calculatedAverage);
if (calculatedAverage >= 7) {
  console.log("Aluno aprovado.");
  return;
} else if (calculatedAverage >= 5 && calculatedAverage <= 6.9) {
  console.log("Aluno em exame.");
  console.log("Nota do exame:", finalGrade.toFixed(1));
  if (finalAverage(calculatedAverage, finalGrade) >= 5) {
    console.log("Aluno aprovado.");
    console.log("Media final:", finalAverage(calculatedAverage, finalGrade));
  } else {
    console.log("Aluno reprovado");
    // console.log(calculatedAverage);
    console.log("Media final:", finalAverage(calculatedAverage, finalGrade));
  }
} else {
  console.log("Aluno reprovado.");
}

function weightedAverage(grades, weights) {
  let media = 0;
  let i = 0;
  while (i < grades.length) {
    media += parseFloat(grades[i]) * weights[i];

    i++;

    if (i == grades.length) {
      media /= weights.reduce((acc, value) => {
        return acc + value;
      });
    }
  }

  return media.toFixed(1);
}

function finalAverage(average, finalGrade) {
  return ((parseFloat(average) + parseFloat(finalGrade)) / 2).toFixed(1);
}
