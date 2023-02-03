const { allPosts } = require("../data");

const router = require("express").Router();

router.get("/about", (req, res) => {
  res.render("index", {
    navLinkFromServer: "/about",
    data: allPosts,
  });
});
module.exports = router;
