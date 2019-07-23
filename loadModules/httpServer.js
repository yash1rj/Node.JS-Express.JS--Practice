const http = require("http");
const mod = require("./modules.js")

let server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-type": "text/html"});

    let result1 = mod.sum(2, 5);
    let result2 = mod.checkPrime(23);

    console.log("Request received");

    res.write(`Result for addition : ${result1} <br>`);
    res.write(`Result for checking prime number : ${result2} <br>`);
    res.end("<html><body>The request URL is: " + req.url + "</body></html>");
});

server.listen(3000);

console.log("Server is running at port 3000");