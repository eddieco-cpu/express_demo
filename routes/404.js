const express = require("express");
const router = express.Router();

router.get("/*", function (req, res) {
  res.status(404).render("404", {
    layout: false,
    address: req.url,
  });
});

module.exports = router;
