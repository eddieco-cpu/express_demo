const express = require("express");
const router = express.Router();

//
router.get("/", function (req, res) {
  res.render("index", {
    title: "Welcome to my website!",

    helpers: {
      //only use in index page
      randomNum: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      },
    },
  });
});
router.use("/about", require("./about"));
router.use("/story", require("./story"));
router.use("/notes", require("./notes"));
router.use(require("./404"));

module.exports = router;
