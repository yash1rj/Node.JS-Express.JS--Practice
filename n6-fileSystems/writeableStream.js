const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
	input: fs.createReadStream('shoppingList.txt')
});

// The ouput file(shoppingResults.txt) be created on the go.
const fileStream = fs.createWriteStream('shoppingResults.txt');

const transformData = (line) => {
	fileStream.write(`They were out of: ${line}\n`);
};

myInterface.on('line', transformData);
