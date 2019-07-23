const http = require("http");

let server = http.createServer((req, res) => {
    console.log("Request received");

    res.writeHead(200, {"Content-type": "text/html"});

    res.write("Welcome to Node!");
    res.write("<html><body>URL was: " + req.url + "</body></html>");

    res.end();
});

server.listen(3000);

console.log("Server is running at port 3000");