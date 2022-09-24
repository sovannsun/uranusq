const packageData = require("../models/packageData");

module.exports = async (req, res) => {
  await packageData.create({ ...req.body, userid: req.session.userId });
  res.redirect("/user/dashboard/");
};
