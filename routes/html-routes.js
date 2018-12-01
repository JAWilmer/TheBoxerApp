var path = require("path");

module.exports = function(app) {
  
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/smCustomBox", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/smCustomBox.html"));
  });

  app.get("/smSpecialtyBox", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/smSpecialtyBox.html"));
  });

  app.get("/lgCustomBox", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/lgCustomBox.html"));
  });

  app.get("/lgCustomBox", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/lgCustomBox.html"));
  });

  app.get("/cart", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/cart.html"));
  });

  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/contact.html"));
  });

  app.get("/questionnaire", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/questionnaire.html"));
  });

};
