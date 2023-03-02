var fs = require("fs")

fs.open("input.txt", "r+", (err, fd) => {
	if(err) {
		console.error(err)
	}

	console.log("File opened successfully")
})
