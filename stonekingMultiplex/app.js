const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

const router = require("./multiplex.route.js");
app.use("/", router);

app.listen(3000); 
console.log("Server Started at port 3000!");