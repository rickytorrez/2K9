/** create the app object */
var express = require("express");
var bodyparser = require("body-parser");

var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

/** configure the API */
var customerAPI = require("./controllers/customerController");
app.use("/api/customers", customerAPI);

/** configure the port */
app.listen(8080);
console.log("Server running on 8080")