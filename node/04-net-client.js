const net = require("net")

const client = net.connect({port: 46265}, () => {
	console.log("Connected to server")

	client.write("world!\r\n")
})

client.on("data", (data) => {
	console.log(typeof data)
	console.log(data.toString())
	client.end()
})

client.on("end", () => {
	console.log("disconnected")
})
