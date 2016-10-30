/**
 * Created by Edu on 22/10/16.
 */

var azure = require('azure-mobile-apps');
var table = azure.table();

table.columns = {
    "title": "string",
    "body": "string",
    "photoURL": "string",
    "latitude": "number",
    "longitude": "number",
    "author": "string",
    "publicated": "bool",
    "score": "number",
    "totalScore": "number",
    "numberOfRatings": "number",
    "userId": "string"
};

table.dynamicSchema = false;

table.insert(function (context) {

    if (context.item.numberOfRatings === undefined) {
        context.item.numberOfRatings = 0;
        context.item.totalScore = 0;
        context.item.score = -1;
    }
    return context.execute();
});

table.read.access = 'anonymous';
table.update.access = 'anonymous';
table.delete.access = 'authenticated';
table.insert.access = 'authenticated';

module.exports = table;