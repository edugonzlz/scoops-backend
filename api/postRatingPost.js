/**
 * Created by Edu on 29/10/16.
 */

var postRatingPost = {
    get: function (req, res, next) {

        if (typeof req.params.length < 0) {
            return next();
        }

        console.log("**ID: " + req.query.id + " rating: " + req.query.rating);
        // 1- buscamos el post con el id de la query
        var query = {
        // 2- recogemos sus datos de valoracion
            sql: "Select id,score,totalScore,numberOfRatings FROM Posts WHERE id=@id",
            parameters:[{name:"id", value: req.query.id}]
        };

        var context = req.azureMobile;

        req.azureMobile.data.execute(query)
            .then(function (results) {
                console.log("**Post: " + typeof results);

                var post = results;
                var rating;
                var ratingTotal;
                var numberOfRates;

                // 3- calculamos rating con los datos de la query
                if (post !== undefined) {
                    // comprobar si el score es -1 y ponerlo a 0 en ese caso
                    console.log("**total: " + post["score"] +  " number: " + post["numberOfRatings"]);

                    ratingTotal = post.score + parseInt(req.query.rating);
                    numberOfRates = post.numberOfRatings + 1;
                    rating = (ratingTotal)/(numberOfRates);
                }

                // 4- actualizamos el post
                // actualizamos score, totalScore, numberOfRatings
                var queryUpdate = {
                    sql: "UPDATE Posts SET score=@rating totalScore=@totalScore numberOfRatings=@numberOfRatings WHERE id=@id",
                    parameters:[{name:"id", value: req.query.id},
                        {name:"rating", value:rating},
                        {name:"totalScore", value: ratingTotal},
                        {name:"numberOfRates", value:numberOfRates}]
                };
                req.azureMobile.data.execute(queryUpdate)
                    .then(function (results) {
                       res.json(results)
                    });
            });

    }

};

module.exports = postRatingPost;