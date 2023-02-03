const express = require("express");
const path = require("path");

const app = express();
require("dotenv").config();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname + "views")));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json({ limit: "5mb", type: "application/json" }));
app.use(express.urlencoded({ extended: true }));

const authRoute = require("./routes/auth");
const homeRoute = require("./routes");
const postRoute = require("./routes/post");
const categoryRoute = require("./routes/category");
const aboutRoute = require("./routes/about");

app.use(authRoute);
app.use(homeRoute);
app.use(postRoute);
app.use(categoryRoute);
app.use(aboutRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(":> Server is up and running on port " + PORT)
);
