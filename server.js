var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


  var reserv = [
    {
      name: "Zac",
      phoneNumber: 2323232323,
      email: "zac@aol.com",
      uniqueId: 1
    },
    {
      name: "Frankey",
      phoneNumber: 8181818138,
      email: "frankey@gmail.com",
      uniqueId: 2
      
    },
    
  ];


  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });


  app.get("/api/reserv", function(req, res) {
    return res.json(reserv);
  });


  app.get("/api/reserv/:reservation", function(req, res) {
    var chosen = req.params.reservation;
  
    console.log(chosen);
  
    for (var i = 0; i < reserv.length; i++) {
      if (chosen === reserv[i].routeName) {
        return res.json(reserv[i]);
      }
    }
  
    return res.json(false);
  });
  
  // Create New Characters - takes in JSON input
  
  app.post("/api/tables", function(req, res) {
    var newReserv = req.body;
    newReserv.routeName = newReserv.name.replace(/\s+/g, "").toLowerCase();
    console.log(newReserv);
    characters.push(newReserv);
    res.json(newReserv);
  });


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
