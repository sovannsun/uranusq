const userData = require("../models/userData");
const packageData = require("../models/packageData");

module.exports = async (req, res) => {
  const UId = req.session.userId;
  const FirstName = req.session.userFirsName;
  const userPosition = req.session.userPosition;
  const allwaitingpackage = await packageData
    .find({ payment: "Waiting" })
    .count();
  const userprice = await userData.findById(req.params.id);
  if (req.session.userId) {
    return res.render("userprice", {
      userprice,
      UId,
      FirstName,
      userPosition,
      allwaitingpackage,
    });
  }
  res.redirect("/auth/login");
};
