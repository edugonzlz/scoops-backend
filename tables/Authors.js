/**
 * Created by Edu on 22/10/16.
 */

var azure = require('azure-mobile-apps');
var table = azure.table();

table.columns = {
    "name": "string",
    "email": "string"
};

table.dynamicSchema = false;

// table.read.access = 'anonymous';
// table.update.access = 'authenticated';
// table.delete.access = 'authenticated';
// table.insert.access = 'anonymous';

module.exports = table;