var db = require("../models");

module.exports = function (app) {
  app.post("/api/products", (req, res) => {
    db.Product.create(req.body).then(function (dbProduct) {
      res.json(dbProduct);
    });
  });

  app.get("/products", (req, res) => {
    db.Product.findAll({}).then(function (data) {
      res.render("productList", {
        products: data
      });
    });
  })

  app.get("/products/:id", (req, res) => {
    //var product;
     db.Product.findOne({
      where: {
        id: parseInt(req.params.id) 
      }
    }).then(function (dbProduct) {
     //product=dbProduct 
     //console.log(product)
     db.Review.findAll({
      where: {
        productId: parseInt(req.params.id)
      }
      
    }).then(function (data) {
      //console.log(data)
      res.render("product", {
        products: dbProduct,
        reviews: data,
        productId: req.params.id
      });
    });
    });
   
   
  })
}