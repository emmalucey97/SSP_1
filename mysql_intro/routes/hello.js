var express = require('express');
var app = express();
app.get('/hello', function(req, res){
    res.writeHead(200);
    res.write('Hello!!');
    res.end();
});
module.exports = apps;