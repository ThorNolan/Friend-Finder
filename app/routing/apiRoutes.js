//=============================== DEPENDENCIES ==========================================

// Get data that I exported from my friends.js file and store in a variable
var friendData = require("../data/friends.js");

//=================================== ROUTING ============================================

module.exports = function(app) {
    // Return all data in friends.js in JSON format
    app.get("/api/friends", function(req, res) {
      res.json(friendData);
    });

    // This is where my main comparison functionality happens, users survey responses which were posted from survey.html are compared against the existing data in friends.js and then their best friend match can be determined and returned to them as a modal popup
    app.post("/api/friends", function(req, res) {

        //console.log(req.body.responses);

        // Store user response data and scores in local variables
        var userData = req.body;
        var userResponses = userData.responses;

        // ParseInt for my user responses so they can be compared as integers
        for (var i=0; i < userResponses.length; i++) {
            userResponses[i] = parseInt(userResponses[i]);
        }

        // Ideal match will be set to the index of the friend whose responses have the minimum difference
        var minDifference = 50;
        var idealMatchIndex = 0;
    
        // Loop through both arrays so they can be compared and total the difference between responses calculated
        for (var i=0; i < friendData.length; i++) {

            // Difference will be increased and compared against the max difference, which will be set to the minimum difference through the course of the following iterations
            var difference = 0;

            // Calculated the total difference between user responses and each item in the friends array
            for (var j=0; j < friendData[i].responses.length; j++) {
                difference += Math.abs(friendData[i].responses[j] - userResponses[j]) 
            }

            // If the new calculated difference is lower than the minimum, use the friend at i as the new ideal match
            if (difference < minDifference) {
                minDifference = difference;
                idealMatchIndex = i;
            }
        }

        // Push the user data to the friends array in friends.js after iterations are complete
        friendData.push(userData);

        // Send response with the calculated match for the user
        res.json(friendData[idealMatchIndex]);
    });    
};

