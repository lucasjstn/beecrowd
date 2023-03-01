var fs = require("fs");
const { log } = require("util");

var data = ""

var readerStream = fs.createReadStream("input.txt");

readerStream.setEncoding("utf-8")

readerStream.on("data", function(chunk) {
	data += chunk;
})

readerStream.on("end", function() {
	log(data)
})

readerStream.on("error", function(err) {
	console.log(err);
})

console.log("Program Ended")
