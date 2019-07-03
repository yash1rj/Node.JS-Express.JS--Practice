/*
Readable Streams
In realistic scenarios, data isn’t processed all at once but rather sequentially, piece by piece, in what is known as a stream. Streaming data is often preferable since you don’t need enough RAM to process all the data at once nor do you need to have all the data on hand to begin processing it.

One of the simplest uses of streams is reading and writing to files line-by-line. To read files line-by-line, we can use the .createInterface() method from the readline core module. .createInterface() returns an EventEmitter set up to emit 'line' events:
*/

// We require in the readline and fs core modules.
const readline = require('readline');
const fs = require('fs');

// We set our input to fs.createReadStream('shoppingList.txt') which will create a stream from the text.txt file.
let settings = {
	input: fs.createReadStream('shoppingList.txt')
};

// We assign to myInterface the returned value from invoking readline.createInterface() with an object containing our designated input.
const myInterface = readline.createInterface(settings);

// Our listener callback will log to the console 'Item: ${data}', where [data] is the line just read.
const printData = (data) => {
	console.log(`Item: ${data}`);
};

// Next we assign a listener callback to execute when line events are emitted. A 'line' event will be emitted after each line from the file is read.
myInterface.on('line', printData);
