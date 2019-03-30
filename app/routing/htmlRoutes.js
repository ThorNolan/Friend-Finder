//=============================== DEPENDENCIES ==========================================

// require the path node package
var path = require("path");

//=================================== ROUTING ============================================

module.exports = function(app) {
  
    // If user routes to survey or presses survey button on main html page, route to survey page
    app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
  
    // If no matching route is found default to home
    app.get("*", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};