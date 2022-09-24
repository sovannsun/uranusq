const packageData = require("../models/packageData");

module.exports = async (req, res) => {
  const UId = req.session.userId;
  const FirstName = req.session.userFirsName;
  const userPosition = req.session.userPosition;
  const allwaitingpackage = await packageData
    .find({ payment: "Waiting" })
    .count();
  const packagedetail = await packageData
    .findById(req.params.id)
    .populate("userid");
  if (req.session.userId) {
    return res.render("userpackagedetail", {
      UId,
      FirstName,
      userPosition,
      allwaitingpackage,
      packagedetail,
    });
  }
  res.redirect("/auth/login");
};
