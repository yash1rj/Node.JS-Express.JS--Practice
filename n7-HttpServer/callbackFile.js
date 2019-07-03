const fs = require('fs');

// The requestListener expects to take in request and response objects (req and res). It invokes the fs.readFile() method with myWebsite.html. 
module.exports = {
	requestListener: (req, res) => {
		fs.readFile('./myWebsite.html',  'utf-8', (err, data) => {
			// If there’s an error it will write the error while attempting to read the file to the response object, otherwise, it will write the contents of the file.
			if (err){
				res.writeHead(404, {'Content-Type': 'text/html'});
				res.write(`${err}`);
				res.end();
			} 
			else {
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.write(data);
				res.end(); 
			}
		})
	}
}
