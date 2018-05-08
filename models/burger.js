// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  // Select all burger's from database to be placed under "Listed Burger's" page
    selectAll: function(cb) {
      orm.selectAll(function(res) {
        cb(res);
      });
    },
    // Insert additional burger's into the database and populate them into the "Listed Burger's"
    insertOne: function(burger_name, cb) {
      orm.insertOne(burger_name, function(res) {
        cb(res);
      });
    },
    // Change burger's from being "Listed" to being "Devoured"
    updateOne: function(id, cb) {
      orm.updateOne(id, function(res) {
        cb(res);
      });
    },
    // Delete burger's from database (does not work)
    deleteOne: function(id, cb) {
      orm.deleteOne(id, function(res) {
        cb(res);
      });
    },
};
  
// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;