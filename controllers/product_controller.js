var db = require("../models/product");

<<<<<<< HEAD
var router = express.Router()

router.get("/", function (req, res) {
  db.all(function (data) {
    var hbsObject = {
      products: data
    };
    console.log(hbsObject);
    res.render("name", hbsObject);
  });
});

module.exports = products;
=======
module.exports = function(app) {
    app.get("/", function(req, res) {
        res.render("index");
      });

      app.post("/api/products", function(req, res) {
        db.Product.create(req.body).then(function(dbProduct) {
            res.json(dbProduct);
        });
      });

      app.get("/products", function(req, res) {
          db.Product.findAll({
          }).then(function(data) {
              console.log(data);
              res.render("productList", {
                  products: data
              });
          });
      })
}

>>>>>>> b0563c0c27faa58cf59e3a501b464bc0ebd8795f
