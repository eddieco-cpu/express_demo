const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.render("about", require("../../data/about"));
});

module.exports = router;
