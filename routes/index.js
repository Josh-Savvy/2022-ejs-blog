const { allPosts } = require("../data");

const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index", {
    navLinkFromServer: "/",
    data: allPosts.reverse(),
  });
});

module.exports = router;
