var server = require("http");
var url = require('url');

server.createServer((req,res)=>{
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');
	res.writeHead(200, {'Content-Type': 'application/json'});
	
	if(req.url.includes("griddata")){
		res.write(`{"columns":["Dessert (100g serving)","Calories","Fat (g)","Carbs (g)","Protein (g)"],"rows":[{"name":"Frozen yoghurt","calories":159,"fat":6,"carbs":24,"protein":4},{"name":"Ice cream sandwich","calories":237,"fat":9,"carbs":37,"protein":4.3},{"name":"Eclair","calories":262,"fat":16,"carbs":24,"protein":6},{"name":"Cupcake","calories":305,"fat":3.7,"carbs":67,"protein":4.3},{"name":"Gingerbread","calories":356,"fat":16,"carbs":49,"protein":3.9}]}`);
	}
	else if(req.url.includes("login")){
		var q = url.parse(req.url, true).query;
		res.write(q.username === "u1" && q.password === "p1"? "true" : "false");
	}
	res.end();
}).listen("3456");