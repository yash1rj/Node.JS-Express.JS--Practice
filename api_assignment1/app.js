const express = require('express'); 
const app = express(); 

const fs = require('fs');

app.get("/getAll", (req, res) => {
    fs.readFile("./games.txt", "utf-8", (err, content) => {
        if(!err) {
            res.status(200).send(content);
        }
        else {
            throw err;
        }
    });
});

app.get("/params/:year", (req, res, next) => {
    console.log(req.params.year);
    next();
});

app.get("/params/:year", (req, res, next) => {
    res.status(200).send(`Filter by year ${req.params.year} was applied.`);
});

app.get("/query", (req, res) => {
    res.status(200).send(`Filter by name ${req.query.name} was applied.`);
});

app.listen(3000); 
console.log("Server Started at port 3000!");