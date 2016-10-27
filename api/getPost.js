/**
 * Created by Edu on 27/10/16.
 */

var getPost = {
    get: function (req, res, next) {

        console.log("IDD" + req.params.id);
        if (typeof request.params.id === 'undefined')
            return next();

        var context = req.azureMobile;
        var user = context.user.id;

        var query = {
            sql: "Select * FROM Posts",
            parameters: [{id: req.params.id}]
        };

        req.azureMobile.data.execute(query)
            .then(function (results) {
                res.json(results)
            });
    }
};

getPost.get.access = 'anonymous';
module.exports = getPost;