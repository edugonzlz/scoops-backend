/**
 * Created by Edu on 27/10/16.
 */

var getPost = {
    get: function (req, res, next) {

        if (typeof req.params.length < 0) {
            return next();
        }

        // var context = req.azureMobile;
        // var user = context.user.id;

        var query = {
            // id,title,author,body,photoURL,createdAt,publicated, latitude, longitude, score

            sql: "Select * FROM Posts WHERE id=@id",
            parameters:[{name:"id", value: req.query.id}]
        };

        req.azureMobile.data.execute(query)
            .then(function (results) {
                res.json(results)
            });
    }
};

getPost.get.access = 'anonymous';
module.exports = getPost;