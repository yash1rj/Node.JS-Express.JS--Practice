const fs = require("fs");

fs.readFile("./note.txt", (err, data) => {
    if(err) {
        console.log("Operation failed");
    }
    else {
        fs.writeFile("./note_copy.txt", data, (err) => {
            if(err) {
                console.log("Operation failed");
            }
            else {
                fs.writeFile("./note.txt", "", (err) => {
                    if(err) {
                        console.log("Operation failed");
                    }
                    else {
                        console.log("Operation successful");
                    }
                })
            }
        })
    }
})
