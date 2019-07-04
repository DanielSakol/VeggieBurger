// Server and routing dependencies
const express = require("express");
const app = express();
const path = require("path");
const exphbs = require("express-handlebars");
const PORT = process.env.PORT || 4000;


// Allow static content obtained from 
app.use(express.static(path.join(__dirname, 'public')));
// Needed to parse application and return JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Handlebars templating
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Route from server to controller
const routes = require("./controllers/burgersController.js");
app.use(routes);

// Starts server so it can listen for requests
// Console log added to verify it is running
app.listen(PORT, function () {
  console.log("Listening on: http://localhost:" + PORT);
});