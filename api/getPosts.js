/**
 * Created by Edu on 24/10/16.
 */

var getPosts = {
    get: function (req, res, next) {

        if (typeof req.params.length < 0) {
            return next();
        }

        var context = req.azureMobile;
        var query;
        // si somos anonimos entregamos solo publicados
        if (context.user === 'undefined') {
            query = {
                sql: "SELECT * FROM Posts WHERE publicated=@public ORDER BY createdAt DESC",
                parameters:[{name:"public", value:1}]
            }
        }
        // si existe user entregamos solo los de su id
        else if (context.user !== 'undefined') {
            console.log("User: " + context.user);
            console.log("UserId: " + context.user.id);
            query = {
                // id,title,author,photoURL,createdAt,publicated
                sql: "SELECT * FROM Posts WHERE userId=@id ORDER BY createdAt DESC",
                parameters: [{name:"id", value:context.user.id}]
            };
        }

        req.azureMobile.data.execute(query)
            .then(function (results) {
                res.json(results)
            });
    }
};

getPosts.get.access = 'anonymous';
module.exports = getPosts;