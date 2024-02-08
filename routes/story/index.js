const express = require("express");
const router = express.Router();

router.get("/(:id)?", function (req, res) {
  const { id } = req.params;
  const { list } = require("../../data/story");

  const selectd_story = list.find((el) => el.story_id == id);

  res.render("story", {
    title: "This is story" + (selectd_story ? id : ""),
    story: true,
    context: selectd_story,
    errMessage:
      !selectd_story && id
        ? `untrack story ID: ${id}`
        : !id
        ? "miss story ID of url"
        : "unknow err",
  });

  //res.redirect()
});

module.exports = router;
