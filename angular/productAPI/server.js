/** create the app object */
var express = require("express");
var bodyparser = require("body-parser");

var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

/** configure the API */
var productAPI = require("./controllers/product.controller");
app.use("/api/products", productAPI)

/** configure the port */
app.listen(8080);
console.log("Server running on 8080")