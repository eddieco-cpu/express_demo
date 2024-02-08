const express = require("express");
const app = express();

require("dotenv").config();
const port = process.env.PORT || 3000;

const { helpers } = require("./tools");
const expressHbs = require("express-handlebars");

var hbs = expressHbs.create({
  extname: ".hbs",
  helpers,
});
app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

//use
app.use("/static", express.static("assets"));
app.use(require("./routes"));

//server
app.listen(port, () => {
  console.log("express server running at http://127.0.0.1:" + port);
});
