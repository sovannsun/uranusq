const userData = require("../models/userData");

module.exports = (req, res) => {
  userData.create(req.body, (error, user) => {
    if (error) {
      const validationErrors = Object.keys(error.errors).map(
        (key) => error.errors[key].message
      );
      req.flash("validationErrors", validationErrors);
      req.flash("data", req.body);
      return res.redirect("/auth/register");
    }
    res.redirect("/alert/user/register");
  });
};
