$(document).ready(function() {

    $(".add-cart").on("submit", function(event) {
        event.preventDefault();

        let itemQuantity = parseInt($("#select-qty").val());

        if(Number.isInteger(itemQuantity)) {
            
            let addCart = {
                ProductId: ($(this).data("id")),
                quantity: itemQuantity
            }
            
            console.log(itemQuantity);
            
            $.ajax("/api/cart", {
                type: "POST",
                data: addCart
            }).then(function() {
                console.log("added item to cart");
                location.reload();
            });
        } else 

            var qtyError = $("<p>");
            qtyError.css({"color": "red"});
            qtyError.text("Please select a QTY");
            $("#select-qty").parent().append(qtyError);
            setTimeout(function () {
                qtyError.remove();
                }, 2000);
            return;
        
    });


})