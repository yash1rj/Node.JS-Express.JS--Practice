const express = require('express'); 
// const router = require('./routes/routing'); 
const app = express(); 

// app.use('/', router); 

app.route('/')
    .get((req, res) => {
        console.log("Accessing home page")
        res.send('Welcome');
    })
    .post((req, res) => {
        res.send('Add a user');
    })
    .put((req, res) => {
        res.send('Update the user details');
    })
    .all((req, res) => {   
        res.json({"message":"For all matching / request"});
    })

app.listen(3000); 
console.log("Server Started at port 3000!");
