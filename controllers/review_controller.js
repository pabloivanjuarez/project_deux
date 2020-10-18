var db = require("../models");

module.exports = function(app) {

    app.post("/api/reviews", function(req, res) {
        db.Review.create(req.body).then(function(dbReview) {
            res.json(dbReview);
        });
    })
}