var db = require("../models/product");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("index");
  });

  app.post("/api/products", function (req, res) {
    db.Product.create(req.body).then(function (dbProduct) {
      res.json(dbProduct);
    });
  });

  app.get("/products", function (req, res) {
    db.Product.findAll({}).then(function (data) {
      console.log(data);
      res.render("productList", {
        products: data
      });
    });
  })
}