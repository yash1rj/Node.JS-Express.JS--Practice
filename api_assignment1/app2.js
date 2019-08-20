const express = require('express'); 
const app = express();

const fs = require('fs');

app.get("/getPackages", (req, res) => {
    fs.readFile("./trekPackages.json", "utf-8", (err, content) => {
        if(!err) {
            res.status(200).send(content);
        }
        else {
            throw err;
        }
    });
});

app.get("/getTrekData/:trekName", (req, res) => {
    // res.send(req.params.trekName);
    fs.readFile("./trekPackages.json", "utf-8", (err, content) => {
        if(!err) {
            let trek = req.params.trekName;
            let data = JSON.parse(content);
            // console.log(data);
            for (var i=0; i < data.length; i++) {
                if (data[i].trekName === trek) {
                    res.status(200).send(data[i].packageName);
                }
            }
        }
        else {
            throw err;
        }
    });
});

app.listen(3000); 
console.log("Server Started at port 3000!");