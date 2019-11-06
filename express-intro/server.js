const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (request, response) => {
  //   response.send("Goodbye World!");
  response.sendFile(__dirname + "/public/home.html");
});

// `.get` refers to the HTTP GET method
app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/public/about.html");
});

app.listen(3000);
