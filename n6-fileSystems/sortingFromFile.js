const fs = require("fs");

let sortData = (username) => {
    fs.readFile("./names.txt", "utf-8", (err, content) => {
        if(err) {
            console.log("File not got read!!");
        }
        else {
            var sortedContent = content.split(",").sort();
            // console.log(sortedContent);
            fs.appendFile("./sortedNames.txt", `${sortedContent}`, (err) => {
                if(!err) {
                    console.log(`Content has been sorted successfully.`);
                }
                else {
                    throw err;
                }
            })
        }
    })
};

sortData();