const userData = require("../models/userData");
const packageData = require("../models/packageData");

module.exports = async (req, res) => {
  const FirstName = req.session.userFirsName;
  const userPosition = req.session.userPosition;
  const alladmin = await userData.find({ position: "Admin" });
  const allwaitingpackage = await packageData
    .find({ payment: "Waiting" })
    .count();
  if (req.session.userId && req.session.userPosition == "Admin") {
    return res.render("admin", {
      FirstName,
      userPosition,
      alladmin,
      allwaitingpackage,
    });
  }
  res.redirect("/auth/login");
};
