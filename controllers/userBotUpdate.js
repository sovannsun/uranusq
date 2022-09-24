const userData = require("../models/userData");

module.exports = (req, res) => {
  userData.updateOne(req.body, (error, user) => {
    if (error) {
      return res.redirect("/user/dashboard");
    }
    res.redirect("/user/dashboard");
  });
};
