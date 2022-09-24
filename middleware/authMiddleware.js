const userData = require("../models/userData");

module.exports = (req, res, next) => {
  userData.findById(req.session.userId, (error, user) => {
    if (error || !user) {
      return res.redirect("/auth/login");
    }
    next();
  });
};
