const router = require("express").Router();
const { allPosts } = require("../data");

const categories = allPosts?.map((post) => post.category);

router.get("/posts/categories", (req, res) => {
  res.render("categories", {
    navLinkFromServer: "/posts/categories",
    data: [...new Set(categories)],
  });
});

router.get("/posts/categories/:id", (req, res) => {
  const categoryId = req.params.id;
  const categoryPosts = allPosts?.filter(
    (post) =>
      post.category === categoryId[0].toUpperCase() + categoryId.slice("1")
  );
  res.render("post", {
    category: categoryId,
    navLinkFromServer: "/posts/categories",
    data: categoryPosts,
  });
});

module.exports = router;
