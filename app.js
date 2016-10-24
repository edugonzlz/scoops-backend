/**
 * Created by Edu on 22/10/16.
 */

var express = require("express");
var azure = require("azure-mobile-apps");

var app = express();
var mobile = azure();

mobile.tables.import("./tables");

mobile.api.import("./api");

app.use(mobile);

app.listen(process.env.PORT || 3000);