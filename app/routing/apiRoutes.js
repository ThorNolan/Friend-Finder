//=============================== DEPENDENCIES ==========================================

// Get data that I exported from my friends.js file and store in a variable
var friendData = require("../data/friends.js");

var path = require("path");



//=================================== ROUTING ============================================

module.exports = function(app) {
    // Return all data in friends.js in JSON format
    app.get("/api/friends", function(req, res) {
      res.json(friendData);
    });

    // This is where my main comparison functionality happens, users survey responses which were posted from survey.html are compared against the existing data in friends.js and then their best friend match can be determined and returned to them as a modal popup
    app.post("/api/friends", function(req, res) {

        console.log(req.body.scores);

        // Store user response data and scores in local variables
        var userData = req.body;
        var userResponses = userData.responses;

        var matchName = "";
        var matchPhoto = "";

        // ParseInt for all user responses so they can be compared as integers
        for (var i=0; i < userResponses.length; i++) {
            userResponses[i] = parseInt(userResponses[i])
        };

        // Loop through both arrays so they can be compared and total the difference between responses calculated
        for (var i=0; i < friendData.length; i++) {

            // Difference will be increased and compared against the max difference, which will start out higher than 
            var difference = 0;
            var maxDifference = 500;

            // Calculated the total difference between user responses and each item in the friends 
            for (var j=0; j < userResponses.length; j++) {
                difference += Math.abs(friendData[i].responses[j] - userResponses[j]) 
            }

            // Set max difference to the calculated difference so the next iteration can potentially find a better match
            if (difference < maxDifference) {
                maxDifference = difference;
                matchName = friendData[i].name;
                matchPhoto = friendData[i].photo;
            }

            // Push the user data to the friends array in friends.js
            friendData.push(userData);

            // Respond with the calculated match for the user
            res.json({status: "OK", matchName: matchName, matchPhoto: matchPhoto});
        }
    });    
};

