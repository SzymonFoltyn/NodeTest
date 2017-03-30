module.exports = function(app)
{
    app.get('https://jsonplaceholder.typicode.com/posts/:userId', function(req, res) {
        res.send(req.params.userId);
        console.log(res);
    });

}


