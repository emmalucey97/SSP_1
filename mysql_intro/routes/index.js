var express = require('express')
var app = express()
app.get('/', function (req, res){
    req.getConnection(function(error, conn){
        conn.query('SELECT * FROM users ORDER BY id DESC', function(err, rows, fields){
            if (err){
                res.send("err")
            }
            else {
                res.send(rows[0].name);
            }
        })
    })
})
module.exports = app;