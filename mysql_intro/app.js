var express = require('express')
var app = express()

var mysql = require('mysql')

var myConnection = require('express-myconnection')

var config = require('./config')
var dbOptions = {
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    port: config.database.port,
    database: config.database.db
}

app.use(myConnection(mysql, dbOptions, 'pool'))

var index = require('./routes/index')
app.use('/', index)
var hello = require('./routes/hello')
app.use('/hello',hello)
app.listen(3000, function(){
    console.log('server running at port 3000: http://127.0.01:3000')
})