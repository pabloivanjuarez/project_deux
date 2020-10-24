$("#add-review").on("submit", function(event) {
// console.log("submit.test")
    event.preventDefault();
    console.log(event)
    var newReview = {
      title: $("#title").val().trim(),
      body: $("#body").val().trim(),
      ProductId: $("#review").val(),
    };
   console.log(newReview)
    $.ajax("/api/reviews", {
      type: "POST",
      data: newReview
    }).then(
      function() {
        console.log("created new review");
        
        location.reload();
      }
    );
  });
 