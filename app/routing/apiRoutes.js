//=============================== DEPENDENCIES ==========================================

// Get data that I exported from my friends.js file and store in a variable
var friendData = require("../data/friends");


//=================================== ROUTING ============================================

module.exports = function(app) {
    // Return all data in friends.js in JSON format
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });







};

