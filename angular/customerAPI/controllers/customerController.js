/* db connection */
var dbCon = require("../config/db_connection");
var connection = dbCon.getConnection();
connection.connect();

/** express */
var express = require("express");
var router = express.Router();

/* get route */
router.get("/", (req, res)=>{
    connection.query("select * from customer", (err, records, fields)=>{
        if(err){
            console.log(err);
        } else {
            res.send(records);
        }
    })
})

/* get a customer by id */
router.get("/:id", (req, res)=>{
    connection.query("select * from customer where id="+req.params.id, (err, records, fields)=>{
        if(err){
            console.log("Error while fetching customer", err);
        } else {
            res.send(records);
        }
    })
})

/* create a customer */
router.post("/", (req, res)=>{
    var id = req.body.id;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var location = req.body.location;
    var age = req.body.age;

    connection.query("insert into customer values("+id+",'"+firstname+"','"+lastname+"','"+location+"',"+age+")", (err, result)=>{
        if(err){
            console.log("Error while creating customer", err);
        } else {
            res.send({create:"success"});
        }
    })
})

/* edit a customer */
router.put("/", (req, res)=>{
    var id = req.body.id;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;

    connection.query("update customer set firstname='"+firstname+"',lastname='"+lastname+"' where id="+id,
    (err, result)=>{
        if(err){
            console.log("Error while updating the customer", err);
        } else {
            res.send({update:"success"});
        }
    })
})

/* delete a customer */
router.delete("/:id", (req, res)=>{
    connection.query("delete from customer where id="+req.params.id, (err, records, fields)=>{
        if(err){
            console.log("Error while deleting the customer", err);
        } else {
            res.send({delete:"success"});
        }
    })
})

module.exports = router;