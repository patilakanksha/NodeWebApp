var express = require('express');
var app = new express();
var port=3000;

app.use(express.static('src/views'));
app.get('/', function(req, res){
    res.send("<h1>Hello From Akanksha</h1>")
})
app.get('/users', function(req, res){
    res.send("<h1>Hello From Users</h1>")
})
app.listen(port, function(err){
    if(typeof(err) =="undefined"){
        console.log(`Application running on `+port+" port");
    }
})