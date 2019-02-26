var express = require('express');
var http = require('http');
var app = express();
app.get('/', function(reg, res){
    res.writeHead(200);
    res.write('Hello Express!!!');
    res.end();
});


app.get('/hello', function(reg, res){
    res.writeHead(200);
    res.write('hello new route');
    res.end()
})
http.createServer(app).listen(4567);