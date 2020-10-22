const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const Handlebars = require('handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ handlebars: allowInsecurePrototypeAccess(Handlebars) }));
app.set("view engine", "handlebars");

require("./controllers/product_controller.js")(app);
require("./controllers/review_controller.js")(app);
require("./controllers/cart_controller.js")(app);

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});