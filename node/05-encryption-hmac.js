const crypto = require("crypto")

const secret = "aabbcc"

const hash = crypto.createHmac("sha256", secret)
.update("My password")
.digest("hex")

console.log(hash)
