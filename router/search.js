 module.exports = function(app)
 {
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
 }