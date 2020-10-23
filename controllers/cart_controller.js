var db = require("../models");

module.exports = function (app) {
  app.get("/cart", function (req, res) {
    db.Cart.findAll({
      include: [db.Product]
    }).then(function (data) {
      res.render("cart", {
          carts: data
    });
    });
  });

  app.get("/api/cart", function (req, res) {
    db.Cart.findAll({
      include: [db.Product]
    }).then(function (data) {
      res.json(data);
    });
  });
  
  app.post("/api/cart/", function (req, res) {
      db.Cart.create(req.body).then(function(addedItem) {
          res.json(addedItem);
        //   res.redirect("/products");
      })
  });

  app.put("/api/cart/:itemId", function (req, res) {
    db.Cart.update ({quantity: req.body.quantity}, {
        where: {
            ProductId: req.params.itemId
        },
        include: [db.Product]
    }).then(function(cartItems) {
        res.json(cartItems);
    });
  });

  app.delete("/api/cart/:itemId", function(req, res) {
      db.Cart.destroy({
          where: {
              ProductId: req.params.itemId
          }
      }).then(function(data) {
          res.json(data);
      });
  });


}
