const fs = require("fs");

fs.readFile("./loga.txt", "utf-8", (err, content) => {
    if(!err) {
        console.log(content);
    }
    else {
        throw err;
    }
});

console.log("After reading File");
