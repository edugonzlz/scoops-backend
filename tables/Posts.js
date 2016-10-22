/**
 * Created by Edu on 22/10/16.
 */

var azure = require('azure-mobile-apps');
var table = azure.table();

table.columns = {
    "title": "string",
    "body": "string",
    "photoURL": "string",
    "location": {"latitude":"number",
            "longitude": "number"},
    "author": "string",
    "publicated": "bool",
    "score": "number",
    "creationDate":"number"
};

table.dynamicSchema = false;

table.read.access = 'anonymous';
table.update.access = 'authenticated';
table.delete.access = 'authenticated';
table.insert.access = 'anonymous';

module.exports = table;