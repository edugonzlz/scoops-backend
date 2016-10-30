/**
 * Created by Edu on 29/10/16.
 */

var postRatingPost = {
    get: function (req, res, next) {

        if (typeof req.params.length < 0) {
            return next();
        }
        var context = req.azureMobile;

        console.log("**ID: " + req.query.id + " rating: " + req.query.rating);
        // 1- buscamos el post con el id de la query
        var query = {
        // 2- recogemos sus datos de valoracion
            sql: "Select id,score,totalScore,numberOfRatings FROM Posts WHERE id=@id",
            parameters:[{name:"id", value: req.query.id}]
        };
        req.azureMobile.data.execute(query)
            .then(function (results) {
                console.log("**Post: " + results);
            });

        // 3- calculamos rating con los datos de la query
        var rating;
        if (post !== undefined) {
            var ratingTotal = post.score;
            var numberOfRates = post.numberOfRatings;
            rating = (req.query.rating + ratingTotal)/(1 + numberOfRates);
        }

        // 4- actualizamos el post
        var queryUpdate = {
            sql: "UPDATE Posts SET score=@rating WHERE id=@id",
            parameters:[{name:"id", value: req.query.id},
                {name:"rating", value:rating}]
        };
        // context.execute(queryUpdate);

        // var post = context.query.where({id:req.query.id});

        req.azureMobile.data.execute(queryUpdate)
            .then(function (results) {
               res.json(results)
            });
    }

};

module.exports = postRatingPost;