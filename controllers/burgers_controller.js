var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

// Get all burgers in database and list them on the page as "Listed Burgers"
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Post added burgers to the database and insert into the "Listed Burgers"
router.post("/api/burgers", function(req, res) {
  var condition = req.body.burger_name

  console.log(condition);

  burger.insertOne(condition, function(result) {
    // Send back the ID
    res.json({ id: result.insertId });
  });
});

// Remove burgers from "Listed Burger" and place them in "Devoured Burger's"
router.post("/api/burgers/:id", function(req, res) {
  var condition = req.params.id;

  console.log(condition);

  burger.updateOne(condition, function(result) {
      res.redirect("/");
  });
});

// Delete devoured burger's (does not work)
router.delete("/api/burgers/delete/:id", (req, res) => {
  var condition = req.params.id;

  burger.deleteOne(condition, function(result) {
    res.json({ id: result.deleteId });
  });
});

module.exports = router;