var soap = require("soap");
var url = "http://www.tesllc.aero/ws/surpluscheck/surpluscheck.wsdl";
var PNs = [
	{ PN: [
		"P207G08",
		"336-001-909-0"
	] }
];

var args = { username: "user", password: "password", PNs: PNs };

soap.createClient(url, function(err, client) {
	client.GetPart(args, function(err, result) {
		console.log(JSON.stringify(result.GetPartResult, null, 2));
	});
});
