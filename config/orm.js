// Import MySQL connection.
var connection = require("./connection.js");

// Object for all our SQL statement functions.
var orm = {
  // SELECT burgers from database to be listed on page
    selectAll: function(cb) {
    var queryStringSelect = "SELECT * FROM burgers";

    console.log(queryStringSelect);

    connection.query(queryStringSelect, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // INSERT added burgers into database  
  insertOne: function(burger_name, cb) {
    var queryStringInsert = "INSERT INTO burgers SET ?";

    console.log(queryStringInsert);

    connection.query(queryStringInsert, {
      burger_name: burger_name,
    }, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // UPDATE burgers in database from "devoured: false" to "devoured: true"
  updateOne: function(id, cb) {
    var queryStringUpdate = "UPDATE burgers SET ? WHERE ?";

    console.log(queryStringUpdate);

    connection.query(queryStringUpdate, 
      [{devoured: true}, {id: id}],
      function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  // DELETE devoured burgers from database (does not work)
  deleteOne: function(id, cb) {
    var queryStringDelete = "DELETE FROM burgers SET ?";

    console.log(queryStringDelete);

    connection.query(queryStringDelete, {
      id: id,
    }, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
};

// Export the orm object for the model (burger.js).
module.exports = orm;