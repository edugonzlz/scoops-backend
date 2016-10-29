/**
 * Created by Edu on 29/10/16.
 */

var postRatingPost = {
    post: function (req, res, next) {
    
    // recibimos un rating para un post
    // el rating medio es  
    // suma de los rating /numero de ratings

        var query = {
            sql: "Select id,score,totalScore,numberOfRatings FROM Posts WHERE id=@id",
            parameters:[{name:"id", value: req.query.id}]
        };
        req.azureMobile.data.execute(query)
            .then(function (results) {

                // obtenemos el post
            });
}
    
};

module.exports = postRatingPost;