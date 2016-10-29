// /**
//  * Created by Edu on 29/10/16.
//  */
//
// var postRatingPost = {
//     put: function (req, res, next) {
//
//         var query = {
//             sql: "Select id,score,totalScore,numberOfRatings FROM Posts WHERE id=@id",
//             parameters:[{name:"id", value: req.query.id}]
//         };
//         var queryUpdate = {
//             sql: "UPDATE Posts SET score=rating WHERE id=@id",
//             parameters:[{name:"id", value: req.query.id}]
//         };
//         table.read(function(context){
//             var post = context.query.where({id:req.query.id});
//             var ratingTotal = post.score;
//             var numberOfRates = post.numberOfRatings;
//             var rating = (req.query.rating + ratingTotal)/(1 + numberOfRates);
//
//             return.context.execute();
//         });
//         req.azureMobile.data.execute(query)
//             .then(function (results) {
//
//
//             });
//
//     }
//
// };
//
// module.exports = postRatingPost;