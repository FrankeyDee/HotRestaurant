var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
  app.get("/make", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
  });
  
  app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });

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

  app.post("/api/view", function(req, res) {
    var newReserv = req.body;
    newReserv.routeName = newReserv.name.replace(/\s+/g, "").toLowerCase();
    console.log(newReserv);
    characters.push(newReserv);
    res.json(newReserv);
  });


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
