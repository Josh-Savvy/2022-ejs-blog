const jwt = require("jsonwebtoken");

exports.stringValidator = (str) => {
  if (!str.trim()) {
    return true;
  }
};

exports.isUser = (token, path) => {
  const userToken = token;
  jwt.verify(userToken, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      const { username } = user;
      console.log({ "Logged in user": username, userToken });
      return username;
    }
  });
};

// exports.savePost = async (fileName, newData) => {};
