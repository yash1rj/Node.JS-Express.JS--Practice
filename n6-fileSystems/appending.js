const fs = require("fs");

let FIleAppend = () => {
    let str = "Hey there... ";
    fs.appendFile("./loga.txt", str + " At: " + new Date(), (err) => {
        if(!err) {
            console.log("Data appended");
        }
        else {
            throw err;
        }
    })
}

FIleAppend();
