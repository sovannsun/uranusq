const userData = require("../models/userData");
const packageData = require("../models/packageData");

module.exports = async (req, res) => {
  const UId = req.session.userId;
  const FirstName = req.session.userFirsName;
  const userPosition = req.session.userPosition;
  const userpackage = await packageData
    .find({ userid: req.session.userId })
    .populate("userid");
  const allwaitingpackage = await packageData
    .find({ payment: "Waiting" })
    .count();
  const userprofile = await userData.findById(req.params.id);
  if (req.session.userId) {
    return res.render("userprofile", {
      userprofile,
      UId,
      FirstName,
      userPosition,
      userpackage,
      allwaitingpackage,
    });
  }
  res.redirect("/auth/login");
};
