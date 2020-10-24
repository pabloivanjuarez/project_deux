var db = require("../models");
//for a "all reviews page"

module.exports = function (app) {

  app.get("/api/reviews", (req, res) => {
    db.Reviews.findAll({}).then(function (reviews) {
      res.render(reviews)
    })
  })

  app.post("/api/reviews", (req, res) => {
    console.log(req.body)
    req.body.ProductId = parseInt(req.body.ProductId)
    db.Review.create(req.body).then(function (dbReview) {
      res.json(dbReview);
      //console.log(dbReview)
    });
  })
}