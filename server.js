// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3300;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get ("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get ("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});

app.get ("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get ("/api/reservations", function(req, res) {
 res.sendFile(path,join(__dirname, "/API-Waitlist/api-reservations.json"));
});

app.get ("/api/tables", function(req, res) {
    res.sendFile(path,join(__dirname, "/API-Waitlist/api-tables.json"));
});


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
