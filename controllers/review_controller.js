var db = require("../models");

module.exports = function(app) {
    app.get("/api/reviews", function(req, res) {
        var query = {};
        if (req.query.product_id) {
            query.ProductId = req.query.product_id;
        }
        db.Review.findAll({
            where:query,
            include: [db.Product]
        }).then(function(data) {
            var reviewObject = {
                reviews: data
            };
            res.render("review-block", reviewObject);
        });
    });

    app.post("/api/reviews", function(req, res) {
        db.Review.create(req.body).then(function(dbReview) {
            res.json(dbReview);
        });
    })
}