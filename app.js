var express = require('express');
var app = express();

app.use(express.static('public'));


var url = "https://www.google.pl/?gws_rd=ssl#q=";
app.get(url + 'q', function(err, teq, res){
    if (err)
        res.send('Error');
        console.log(err);
    for(var i = 0; i < res.links.length; i++){
        var link = res.links[i];
        console.log(link + ' ' + link.href);
    }   
})

app.get('userId', function(req, res) {
    var userId = req.params.userId;
    console.log('Requested userId: ' + userId);
    res.send('<!DOCTYPE html><html lang="en"><head>'
        + '<meta charset="utf-8">'
        + '<title>' + userId + '</title>'
        + '</head><body>'
        + '<h1><tt>' + userId + '</tt></h1>'
        + '</body></html>');
});

var server = app.listen(3000, function(){
    var host = server.address().address
    var port = server.address().port
    
    console.log('Server connected by port: ' + port);
})


