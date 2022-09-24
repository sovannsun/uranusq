const packageData = require("../models/packageData");

module.exports = async (req, res) => {
  const allpackagelist = await packageData.find({}).populate("userid");
  const FirstName = req.session.userFirsName;
  const userPosition = req.session.userPosition;
  const allwaitingpackage = await packageData
    .find({ payment: "Waiting" })
    .count();
  if (req.session.userId && req.session.userPosition == "Admin") {
    return res.render("billing", {
      allpackagelist,
      FirstName,
      userPosition,
      allwaitingpackage,
    });
  }
  res.redirect("/auth/login");
};
