/*
Writable Streams
In the previous exercise, we were reading data from a stream, but we can also write to streams! We can create a writeable stream to a file using the fs.createWriteStream() method:
*/

const fs = require('fs')

const fileStream = fs.createWriteStream('output.txt');

fileStream.write('This is the first line!'); 
fileStream.write('This is the second line!');
fileStream.end();

/*
In the code above, we set the output file as output.txt. Then we .write() lines to the file. Unlike a readable stream, which ends when it has no more data to read, a writable stream could remain open indefinitely. We can indicate the end of a writable stream with the .end() method.
*/
