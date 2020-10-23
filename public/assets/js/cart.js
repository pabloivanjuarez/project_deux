$(document).ready(function() {
    $(".update-quantity").on("submit", function(event) {
        event.preventDefault();

        let itemId = ($(this).data("id"));
        let itemQty = ($(this).find(".form-control").val());

        let updateQuantity = {
            id: itemId,
            quantity: itemQty
        };

        $.ajax(`/api/cart/${itemId}`, {
            type: "PUT",
            data: updateQuantity
        }).then(
            function() {
                console.log(itemId);
                console.log(itemQty);
                location.reload();
            }
        );
    });

    $(".delete-item").on("submit", function(event) {
        event.preventDefault();

        let itemId = ($(this).data("id"));

        let deleteItem = {
            id: itemId
        };

        $.ajax(`/api/cart/${itemId}`, {
            type: "DELETE",
            data: deleteItem
        }).then(
            function() {
                location.reload();
            }
        )
    })


});