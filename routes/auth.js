const jwt = require("jsonwebtoken");
const { stringValidator, isRegisteredUser, isUser } = require("../middlewares");

const router = require("express").Router();

router.get("/auth/login", (req, res) => {
  res.render("login", {
    navLinkFromServer: "",
    isLoggedIn: false,
  });
});

router.post("/auth/login", (req, res) => {
  const { name, password } = req.body;
  if (name.length > 1 && password.length > 6) {
    const loggedInUserToken = jwt.sign(
      { username: name, password: password },
      process.env.JWT_SECRET_KEY
    );
    console.log("Loggedin | redirecting...");
    res.render("redirect", {
      name: name,
      userToken: loggedInUserToken,
      responseMessage: "User Logged in!",
      navLinkFromServer: "",
    });
  } else {
    if (stringValidator(name) || stringValidator(password)) {
      res.render("login", {
        errorMsg: "Invalid credentials",
        navLinkFromServer: "",
      });
    }
  }
});

router.post("/auth/isloggedin", (req, res) => {
  const { userToken, path } = req.body;
  if (userToken) {
    isUser(userToken, path) &&
      res.status(200).json({ message: "User Authorized" });
  }
});

module.exports = router;

// router.post("/auth/login", (req, res) => {
module.exports = router;
