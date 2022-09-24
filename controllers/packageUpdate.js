const packageData = require("../models/packageData");

module.exports = (req, res) => {
  packageData.updateOne(req.body, (error, user) => {
    if (error) {
      return res.redirect("/admin/dashboard");
    }
    res.redirect("/admin/dashboard");
  });
};
