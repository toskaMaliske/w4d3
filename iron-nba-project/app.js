const express = require("express");
const players = require("./data");
const hbs = require("hbs");
const app = express();

hbs.registerPartials(__dirname + "/views/partials");

app.set("view engine", "hbs");

app.use(express.static("public"));

app.get("/", (request, response) => {
  // this will render the template in /views/index.hbs
  response.render("index.hbs");
});

app.get("/players", (request, response) => {
  const options = {
    // players: players
    players
  };
  response.render("players.hbs", options);
});

app.get("/teams", (request, response) => {
  response.render("teams.hbs", { layout: false });
});

app.listen(3000);
