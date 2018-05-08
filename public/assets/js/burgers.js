// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  // $(".listed-burger").on("click", function(event) {
  //   var id = this.id;
  //   var newDevour = $(this).data("newdevour");

  //   var newDevourState = {
  //       devoured: $(".devoured").val().trim()
  //   };

  //   // Send the PUT request.
  //   $.ajax("/api/burgers/" + id, {
  //     type: "PUT",
  //     data: newDevourState
  //   }).then(
  //     function() {
  //       console.log("changed eaten to", newDevour);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });

  // $("#submit-bttn").on("submit", function(event) {
  //   // Make sure to preventDefault on a submit event.
  //   event.preventDefault();

  //   var newBurger = {
  //     burger_name: $("#burger_name").val().trim(),
  //   //   devoured: $("[burger_name=devoured]:checked").val().trim()
  //   };

  //   // Send the POST request.
  //   $.ajax({
  //     url: "/api/burgers",
  //     type: "POST",
  //     data: newBurger
  //   }).then(
  //     function() {
  //       console.log("inserted new burger");
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });

  // Adding new burger

  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#bgr").val().trim(),
    };
    console.log(newBurger);
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
      
    }).then(
      function () {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
