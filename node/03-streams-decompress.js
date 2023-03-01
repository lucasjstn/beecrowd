var fs = require("fs")
var zlib = require("zlib")

fs.createReadStream("./input.txt.gz")
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream("inputd.txt"))

console.log("File decompressed")
