var db = require("../models/product");

var router = express.Router()

router.get("/", function (req, res) {
  cat.all(function (data) {
    var hbsObject = {
      products: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

module.exports = function (app) {}