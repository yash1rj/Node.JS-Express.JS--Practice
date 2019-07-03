/*
Filesystem
All of the data on a computer is organized and accessed through a filesystem. When running JavaScript code on a browser, it’s important for a script to have only limited access to a user’s filesystem. This technique of isolating some applications from others is known as sandboxing. Sandboxing protects users from malicious programs and invasions of privacy.

In the back-end, however, less restricted interaction with the filesystem is essential. The Node fs core module is an API for interacting with the file system.

Each method available through the fs module has a synchronous version and an asynchronous version. One method available on the fs core module is the .readFile() method which reads data from a provided file:
*/

// We required in the fs core module.
const fs = require('fs');

// We define an error-first callback function which expects an error to be passed as the first argument and data as the second. If the error is present, the function will print Something went wrong: ${err}, otherwise, it will print Provided file contained: ${data}.
let readDataCallback = (err, data) => {
	if (err) {
		console.log(`Something went wrong: ${err}`);
	} 
	else {
		console.log(`Provided file contained: ${data}`);
	}
};

// We invoked the .readFile() method with three arguments:
// The first argument is a string that contains a path to the file shoppingList.txt.
// The second argument is a string specifying the file’s character encoding (usually ‘utf-8’ for text files).
// The third argument is the callback function to be invoked when the asynchronous task of reading from the file system is complete.
fs.readFile('./shoppingList.txt', 'utf-8', readDataCallback);

// Node will pass the contents of shoppingList.txt into the provided callback as its second argument.
