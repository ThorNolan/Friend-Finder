//=============================== DEPENDENCIES ==========================================

// Get data that exported from my friends.js file
var friendData = require("../data/friends");


//=================================== ROUTING ============================================

module.exports = function(app) {
    // Return all data in friends.js in JSON format
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });







};

