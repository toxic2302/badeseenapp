'use strict';

var badeseenservice = require(__dirname +'/index.js');
var express = require('express');
var app = express();
var port = process.env.PORT || 8090;

/* allow xorigin requests for testing purpose*/
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


badeseenservice.registerServer(app,'/');

console.log('service started on port ' + port);
app.listen(port);
