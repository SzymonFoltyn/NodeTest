var express = require('express');
var app = express();

app.use(express.static('public'));

require('./router/check')(app);
require('./router/search')(app);
app.set('views',__dirname + '/views');


var server = app.listen(3000, function(){
    var host = server.address().address
    var port = server.address().port

    console.log('Server listenning at localhost: ' + port);
})


