/*
Routes allow you to match particular patterns of characters in a URL, 
and extract some values from the URL and pass them as parameters to the route handler.


Often it is useful to group route handlers for a particular part of a site together and 
access them using a common route-prefix (e.g. a site with a Wiki might have all wiki-related 
routes in one file and have them accessed with a route prefix of /wiki/). In Express this is 
achieved by using the express.Router object. For example, we can create our wiki route in a 
module named wiki.js, and then export the Router object, as shown below:
*/



// wiki.js - Wiki route module

var express = require('express');
var router = express.Router();

// Home page route
router.get('/', function(req, res) {
  res.send('Wiki home page');
});

// About page route
router.get('/about', function(req, res) {
  res.send('About this wiki');
});

module.exports = router;
