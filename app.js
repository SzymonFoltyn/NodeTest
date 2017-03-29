var express = require('express');
var app = express();
var google = require('google');

app.use(express.static('public'));

google.resultsPerPage = 5;
var next = 0;

app.get('myAction', function(req, res){
    res.send('Link:' + req.body.search);
})
google('', function(err, res){
    if (err)
        res.send('Error');
        console.log(err);
    for(var i = 0; i < res.links.length; i++){
        var link = res.links[i];
        console.log(link + ' ' + link.href);
        console.log(link.description);
//        res.send(link + ' ' + link.href);
//        res.send(link.description);
    }   
})

var server = app.listen(3000, function(){
    var host = server.address().address
    var port = server.address().port
    
    console.log('Server connected by port: ' + port);
})

