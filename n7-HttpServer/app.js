/* 
We’re going to serve in the myWebsite.html file. A requestListener is required into app.js, the code for requestListener is in the callbackFile.js file.
*/

const http = require('http');

let {requestListener} = require('./callbackFile.js');

const PORT = process.env.PORT || 4001;

const server = http.createServer(requestListener);

server.listen(PORT);
