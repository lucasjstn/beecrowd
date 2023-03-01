const { log } = require("console")
const dns = require("dns")

dns.lookup("www.rookienerd.com", (err, addresses, family) => {
	log(addresses)
	log(family)
})
