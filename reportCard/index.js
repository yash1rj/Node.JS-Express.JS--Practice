const express = require('express'); 
const app = express(); 

const bodyParser = require("body-parser");
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post("/api/marks", (req, res, next) => {
    let marksArr = req.body.marks;
    // console.log(marksArr);

    let flag = 1;

    for(let i=0; i<marksArr.length; i++) {
        // console.log(marksArr[i]);
        if(marksArr[i] < 50) {
            flag = 0;
            break;
        }
    }

    let ttlMarks = marksArr.reduce((a, b) => a + b, 0);
    req.body.totalScore = ttlMarks;

    if(flag) {
        next();
    }
    else {
        res.send(`Total mark: ${req.body.totalScore}. Not eligible for scholarship`);
    }
});

app.post("/api/marks", (req, res) => {
    // console.log("in next");
    let avgMarks = req.body.totalScore/4;
    let grade = "Unassigned";
    let scholarship = 0;

    if(avgMarks>50 && avgMarks<70) {
        grade = "C";
        scholarship = 5;
    }
    else if(avgMarks>70 && avgMarks<85) {
        grade = "B";
        scholarship = 15;
    }
    else if(avgMarks>85 && avgMarks<=100) {
        grade = "A";
        scholarship = 20;
    }

    res.send(`Total mark: ${req.body.totalScore}. Obtained grade ${grade}. Eligible for ${scholarship} scholarship`);
});

app.listen(3000); 
console.log("Server Started at port 3000!");