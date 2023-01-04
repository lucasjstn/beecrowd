var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let [x, y] = lines[0].split(" ");
x = parseFloat(x);
y = parseFloat(y);

switch (true) {
  case x === 0 && y === 0:
    console.log("Origem");
    break;
  case x === 0 && y !== 0:
    console.log("Eixo Y");
    break;
  case x !== 0 && y === 0:
    console.log("Eixo X");
    break;
  case x > 0 && y > 0:
    console.log("Q1");
    break;
  case x < 0 && y > 0:
    console.log("Q2");
    break;
  case x < 0 && y < 0:
    console.log("Q3");
    break;
  case x > 0 && y < 0:
    console.log("Q4");
    break;
}
