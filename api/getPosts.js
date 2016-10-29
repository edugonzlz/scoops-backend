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
        // si existe user entregamos solo los de su id
        if (context.user.id !== 'undefined') {
            console.log("UserId: " + context.user.id);
            query = {
                // id,title,author,photoURL,createdAt,publicated
                sql: "SELECT * FROM Posts WHERE userId=@id ORDER BY createdAt DESC",
                parameters: [{name:"id", value:context.user.id}]
            };
        }

        // si somos anonimos entregamos solo publicados
        else if (context.user.id === 'undefined') {
            query = {
                sql: "SELECT * FROM Posts WHERE publicated='true' ORDER BY createdAt DESC"
            }
        }


        req.azureMobile.data.execute(query)
            .then(function (results) {
                res.json(results)
            });
    }
};

getPosts.get.access = 'anonymous';
module.exports = getPosts;