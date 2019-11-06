const express = require("express");
const app = express();

// to change the default views lookup directory
// app.set('views', __dirname + '/')

app.set("view engine", "hbs");

app.get("/", (request, response) => {
  // render the hbs file in /views/index.hbs
  response.render("index.hbs", {
    firstName: "John",
    lastName: "Doe",
    text: "<p>This is a paragraph</p>",
    foo: false,
    // cities: []
    cities: ["Berlin", "Lisbon", "Amsterdam", "Paris"],
    obj: {
      a: 1,
      b: 2,
      c: 3
    }
  });
});

app.listen(3000);
