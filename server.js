//=============================== DEPENDENCIES ==========================================

// require the Express and path node packages
var express = require("express");
var path = require("path");

//============================ EXPRESS CONFIGURATION ====================================

// set up Express server 
var app = express();

// Set initial port and allow port to be set by Heroku
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing with built-in middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Provide server access to my public directory for serving my css and images
app.use(express.static(path.join(__dirname, "./app/public")));
app.use(express.static(path.join(__dirname, "./app/public/assets")));


//=================================== ROUTES =============================================

// Establish routes to my html and api js files from my Express server 
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//=================================== INITIATION =========================================

// Initiate my server on the specified port
app.listen(PORT, function() {
    // Log with link when server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
  