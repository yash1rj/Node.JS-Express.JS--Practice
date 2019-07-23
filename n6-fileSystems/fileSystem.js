const http = require("http");
const fs = require("fs")

let server = http.createServer((req, res) => {
    if(req.url === "/favicon.ico") {
        console.log("Request for favicon");
    }
    else {
        fs.appendFile("./log.txt", "\nRequest from: " + req.url + " At: " + new Date(), (err) => {
            if(err) {
                throw err;
            }
            console.log("Data saved!");
        });

        res.writeHead(200, {"Content-type": "text/html"});
        res.end("<html><body><h1>Successfully logged: " + req.url + "</h1></body></html>");
    }
});

server.listen(3000);

console.log("Server is running at port 3000");