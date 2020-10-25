$(document).ready(function () {

    //submit event when the product is added to the cart
    $(".add-cart").on("submit", function (event) {
        event.preventDefault();

        let itemQuantity = parseInt($("#select-qty").val());

        //checks to make sure a Qty has been selected
        if (Number.isInteger(itemQuantity)) {

            let addCart = {
                ProductId: ($(this).data("id")),
                quantity: itemQuantity
            }

            console.log(itemQuantity);

            //sends the product to the carts table in the database
            $.ajax("/api/cart", {
                type: "POST",
                data: addCart
            }).then(function () {
                console.log("added item to cart");
                location.reload();
            });
        } else
        // if no Qty is selected, an error message will display
            {
            var qtyError = $("<p>");
            qtyError.css({"color": "red"});
            qtyError.text("Please select a QTY");
            $("#select-qty").parent().append(qtyError);
            setTimeout(function () {
                qtyError.remove();
                }, 2000);
                return;
            }

    });


})

$(function () {
    $("#add-review").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        //variables to get the ProductID
        var url = window.location.pathname;
        var id = url.substring(url.lastIndexOf('/') + 1);

        //request that gets sent
        var newReview = {
            title: $("#title").val().trim(),
            body: $("#body").val().trim(),
            name: $("#name").val().trim(),
            ProductId: id
        };
        // Send the POST request to the reviews table in the database
        $.ajax("/api/reviews", {
            type: "POST",
            data: newReview
        }).then(
            function () {
                console.log("created new review");
                // Reload the page to get the updated reviews
                location.reload();
            }
        );
    });
});