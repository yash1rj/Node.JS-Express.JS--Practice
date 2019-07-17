const fs = require("fs");

let fileWrite = () => {
    let str = "Hey there... ";
    fs.writeFile("./logw.txt", str + " At: " + new Date(), (err) => {
        if(!err) {
            console.log("Data written");
        }
        else {
            throw err;
        }
    })
}

fileWrite();
