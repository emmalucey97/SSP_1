var express = require('express')
var app = express()
app.get('/', function (req, res){
    req.getConnection(function(error, conn){
        conn.query('SELECT * FROM users ORDER BY id DESC', function(err, rows, fields){
            if (err){
                res.send("err")
            }
            else {
                var table ="<table>"
                for(var i =0; i <= rows.length;i++)
                {
                    table +="<tr><td>" +
                   rows[i].name + "</td><td>" +
                    rows[i].phone + "</td><td>" +
                    rows[i].email + "</td></tr>";
                }

                table += "</table>"
            }
        })
    })
})
module.exports = app;


