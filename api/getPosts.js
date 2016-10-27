/**
 * Created by Edu on 24/10/16.
 */

var getPosts = {
    get: function (req, res, next) {

        if (typeof req.params.length < 0) {
            return next();
        }
        var context = req.azureMobile;
        var user = context.user.id;

        var query = {
            sql: "Select * FROM Posts"
        };

        req.azureMobile.data.execute(query)
            .then(function (results) {
                res.json(results)
            });
    }
};

getPosts.get.access = 'anonymous';
module.exports = getPosts;