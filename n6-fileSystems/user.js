const fs = require("fs");

let logUser = (username) => {
    fs.readFile("./names.txt", "utf-8", (err, content) => {
        if(err) {
            console.log("File not got read!!");
        }
        else {
            var regx = new RegExp(username, "gi");
            var check = regx.test(content);
            
            if(check) {
                console.log("User already exists!!");
            }
            else {
                fs.appendFile("./names.txt", `,${username}`, (err) => {
                    if(!err) {
                        console.log(`${username} has been added successfully.`);
                    }
                    else {
                        throw err;
                    }
                })
            }
        }
    })
};

logUser("Sam");
