$(document).ready(function() {

    let prices = [];
    let quantities = [];
    let totalPrice = [];

    //gets the price amount for each product and pushes to array
    $(".product-price").each(function() {
        let price = $(this).data("price");
        prices.push(price);
    })

    //gets the qty for each product and pushes to array
    $(".itemQty").each(function() {
        let qty = parseInt($(this).val());
        quantities.push(qty);
    })

    //gets total amount (price*qty) for each product and pushes to array
    for (i=0; i < prices.length; i++) {
        let total = prices[i] * quantities[i];
        totalPrice.push(total);
    }

    //displays the total price for each product in the product table
    $(".item-price").each(function(i) {
        $(this).html(`$${totalPrice[i]}.00`);
    })

    //displays the grand total amount
    $(".grand-total").html(`$${(totalPrice.reduce((a,b) => a + b, 0))}.00`);

    //submit event when the user updates the qty. The qty updates in the carts table and the page is reloaded
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
                location.reload();
            }
        );
    });

    //submit event when the user wishes to remove a product from the cart.
    //The product is removed from the carts table and the page is reloaded.
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