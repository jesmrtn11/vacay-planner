const express = require("express");
const middlewares = require("./middlewares");
const controllers = require("./controllers");
const { body } = require("./middlewares");

const app = express();
const port = 8090;

app.use(express.static("public"));
app.use(body());
app.use(controllers());

app.listen(port, () => {
  console.log("");
  console.log("Listening to port " + port);
  console.log("Ctrl+c to stop");
  console.log("");
});
