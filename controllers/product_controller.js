var db = require("../models");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("index");
  });

  app.get("/about", function (req, res) {
    res.render("about");
  });

  app.get("/contact", function (req, res) {
    res.render("contact");
  });

  app.post("/api/products", function (req, res) {
    db.Product.create(req.body).then(function (dbProduct) {
      res.json(dbProduct);
    });
  });

  app.get("/products", function (req, res) {
    db.Product.findAll({}).then(function (data) {
      res.render("productList", {
        products: data
      });
    });
  })

  app.get("/products/:id", function (req, res) {
    db.Product.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbProduct) {
      db.Review.findAll({
        where: {
          productId: req.params.id
        },
        include: [db.Product]
      }).then(function (data) {
        res.render("product", {
          products: dbProduct,
          reviews: data
        });
      });
    });
  })
}