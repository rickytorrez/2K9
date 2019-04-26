/** database connection */
var dbCon = require("../config/db_connection");
var connection = dbCon.getConnection();
connection.connect();

/** express */
var express = require("express");
var router = express.Router();

/** get all products
 * create first REST API method by mapping it to the "/" route
 * "req" has all the requests from the client, "res" is how we return the response to the client
 * we use the query to return either an error, the record along with the fields,
 * if there's an error, we log it, it not send the records to the front end
 */
router.get("/", (req,res)=>{
    connection.query("select * from product", (err, records, fields)=>{
        if(err){
            console.error("Error while fetching data")
        } else {
            res.send(records)
        }
    })
})

/** get a single product by id */
router.get("/:id", (req,res)=>{
    connection.query("select * from product where id="+req.params.id, (err, records, fields)=>{
        if(err){
            console.error("Error while fetching data")
        } else {
            res.send(records)
        }
    })
})

/** post a product */
router.post("/", (req,res)=>{
    var id = req.body.id;
    var name = req.body.name;
    var description = req.body.description;
    var price = req.body.price;
    connection.query("insert into product values("+id+",'"+name+"','"+description+"',"+price+")",
    (err, result)=>{
        if(err){
            console.error("Error while inserting data"+err)
        } else {
            res.send({insert:"sucess"})
        }
    })
})

/** update a product */
router.put("/", (req,res)=>{
    var id = req.body.id;
    var name = req.body.name;
    var price = req.body.price;
    connection.query("update product set name='"+name+"',price="+price+" where id="+id,
    (err, result)=>{
        if(err){
            console.error("Error while updating data"+err)
        } else {
            res.send({update:"sucess"})
        }
    })
})

/** delete a single product by id */
router.delete("/:id", (req,res)=>{
    connection.query("delete from product where id="+req.params.id, (err, records, fields)=>{
        if(err){
            console.error("Error while deleting data"+err)
        } else {
            res.send({delete:"sucess"})
        }
    })
})


module.exports = router;