const { allPosts } = require("../data");
const { stringValidator, savePost } = require("../middlewares");
const dayjs = require("../public/utils/js/dayjs");
const router = require("express").Router();

const categories = allPosts?.map((post) => post.category);

router.get("/post", (req, res) => {
  res.render("makePost", {
    navLinkFromServer: "",
    categories: [...new Set(categories)],
  });
});

router.post("/post", (req, res) => {
  const { title, caption, category } = req.body;
  const timePosted = dayjs(new Date()).format("ddd, MMM D, YYYY h:mm A");
  if (stringValidator(title)) {
    res.render("makePost", {
      categories: [...new Set(categories)],
      errorMsg: "Error making post > Title cannot be empty.",
      navLinkFromServer: "",
    });
  }
  if (stringValidator(caption)) {
    res.render("makePost", {
      categories: [...new Set(categories)],
      errorMsg: "Error making post > Caption cannot be empty.",
      navLinkFromServer: "",
    });
  }
  if (stringValidator(category)) {
    res.render("makePost", {
      categories: [...new Set(categories)],
      errorMsg: "Error making post > Please select a category.",
      navLinkFromServer: "",
    });
  } else {
    allPosts?.push({ title, caption, category, timePosted });
    res.redirect("/");
  }
});

router.get("/post/:id", (req, res) => {
  const postId = req.params.id;
  res.render("post", {
    navLinkFromServer: "",
    post: allPosts?.find((post) => post.title === postId.split("-").join(" ")),
  });
});

module.exports = router;
