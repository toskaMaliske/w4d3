const express = require("express");
const players = require("./data");
const app = express();

app.set("view engine", "hbs");

app.use(express.static("public"));

app.get("/", (request, response) => {
  // this will render the template in /views/index.hbs
  response.render("index.hbs");
});

app.get("/players", (request, response) => {
  const options = {
    playersList: players
  };
  response.render("players.hbs", options);
});

app.get("/teams", (request, response) => {
  response.render("teams.hbs", { layout: false });
});

app.listen(3000);
