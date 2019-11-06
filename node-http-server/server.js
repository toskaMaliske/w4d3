const http = require("http");

const server = http.createServer((request, response) => {
  console.log("request.url: ", request.url);

  if (request.url === "/") {
    response.write("Hello world!");
    response.end();
  } else if (request.url === "/about") {
    response.write("My name is Bond");
    response.end();
  } else {
    response.write("404 page not found");
    response.end();
  }
});

server.listen(3000);

// https://www.youtube.com

// /watch?v=XBVCvRgANZI
