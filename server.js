//=============================== DEPENDENCIES ==========================================

// require the Express and path node packages
var express = require("express");
var path = require("path");


//============================ EXPRESS CONFIGURATION ====================================

// set up Express server 
var app = express();

// Set initial port and allow port to be set by Heroku
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./app/public"));

//=================================== ROUTES =============================================

// Establish routes to my html and api js files from my Express server 
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//=================================== INITIATION =========================================

// Initiate my server on the specified port
app.listen(PORT, function() {
    // Log with link when server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
  