var db = require("../models");
//for a "all reviews page"

module.exports = function (app) {

  app.get("/api/reviews", (req, res) => {
    db.reviews.findAll({}).then(function (reviews) {
      res.render
    })
  })


  app.post("/api/reviews", (req, res) => {
    db.Review.create(req.body).then(function (dbReview) {
      res.json(dbReview);
    });
  })
}