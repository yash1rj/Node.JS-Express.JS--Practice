const express = require('express');
const router = express.Router();

const fs = require("fs");

router.get("/getAllShows", (req, res) => {
    fs.readFile("./showDetails.txt", "utf-8", (err, content) => {
        if(!err) {
            res.send(content);
        }
        else {
            throw err;
        }
    });
});

router.post("/bookMovie", (req, res) => {
    fs.appendFile("./movieBooking.txt", `,\n${JSON.stringify(req.body)}`, (err) => {
        if(!err) {
            console.log("Data appended");
        }
        else {
            throw err;
        }
    });
});

module.exports = router;