 module.exports = function(app)
 {
    var post = app.get('userId', function(req, res, next) {
        var userId = req.params.userId;
    });
 }