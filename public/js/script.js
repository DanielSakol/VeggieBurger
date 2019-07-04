    
// .ready method to prepare DOM before user interaction
$(document).ready(function () {

  // Connect to buttons
  $(".eatDaBurger").on("click", function (event) {
      event.preventDefault();

      let burger_id = $(this).attr("data-id");
      console.log(burger_id);
      $.ajax({
          method: "PUT",
          url: "/burgers/" + burger_id
      }).then(function (data) {
          // Reload to show eaten burgers
          location.reload();
      });
  });
});