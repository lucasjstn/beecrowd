const { log } = require("console")
var fs = require("fs")

var data = "Just another string"

var writerStream = fs.createWriteStream("output.txt")

writerStream.write(data, "utf8")
writerStream.end()
writerStream.on("end", function() {
	console.log("Write completed")
})

writerStream.on("error", (err)=>{
	console.log(err.stack)
})

log("Program ended")
