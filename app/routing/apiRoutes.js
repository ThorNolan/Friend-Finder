//=============================== DEPENDENCIES ==========================================

// Get data that I exported from my friends.js file and store in a variable
var friendData = require("../data/friends");


//=================================== ROUTING ============================================

module.exports = function(app) {
    // Return all data in friends.js in JSON format
    app.get("/api/friends", function(req, res) {
      res.json(friends);
    });

    // This is where my main comparison functionality happens, users survey responses which were posted from survey.html are compared against the existing data in friends.js and then their best friend match can be determined and returned to them as a modal popup
    app.post("/api/friends", function(req, res) {

        console.log(req.body.scores);

        // Store user response data and scores in local variables
        var userData = req.body;
        var userResponses = userData.responses;

        // ParseInt for all user responses so they can be compared as integers
        for (var i=0; i < userResponses.length; i++) {
            userResponses[i] = parseInt(userResponses[i])
        };

        var idealMatch = 0;
        var total
        

    });    
};

