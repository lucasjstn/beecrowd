var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(" ");

let start = Number(lines[0])
let end = Number(lines[1]);

if(start > end) {
	console.log("O JOGO DUROU " + (24 - start + end) +" HORA(S)")
} else if(end > start) {
	console.log("O JOGO DUROU " + (end - start) + " HORA(S)")
} else {
	console.log("O JOGO DUROU "+ 24 + " HORA(S)")
}
