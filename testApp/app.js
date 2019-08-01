const express = require("express");

const app = express();

const path = require("path");
// Path module provides method to work with system files and folder

const port = 3000;

app.get("/", (req, res) => {
    console.log("Request for index.htmml file");
    res.sendFile(path.join(__dirname + "/views/index.html"));
    // path.join() method, joins the given path segments together resulting into a single path.
    // __dirname is a predefined variable that provides the absolute path of the resource in which it is used
});

app.get("/saveUser", (req, res) => {
    res.json({
        username: req.query.username,
        password: req.query.password
    });
});

app.get("/home", (req, res) => {
    res.set("Content-type", "text/plain");
    res.send("Welcome");
});

app.get("/register", (req, res) => {
    console.log("Request for register.html file");
    res.sendFile(path.join(__dirname + "/views/register.html"));
});

app.get("/about", (req, res) => {
    console.log("Request for about us page");
    res.send("About us");
});

app.get('/user/:username',(req,res) => {
    res.send("<h1>Hello, "+ req.params.username + "</h1>");
}); 

app.listen(port, () => console.log(`Test app listening on port ${port}!`));