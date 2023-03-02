var fs = require("fs")

fs.readFile("./input3.txt", (err, data) => {
	if(err) {
		return console.err(err)
	}

	console.log("Async read", data.toString())
})

//Synchronous reading
var data = fs.readFileSync("./input3.txt")
console.log(data)

