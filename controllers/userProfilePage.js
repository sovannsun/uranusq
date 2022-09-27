const userData = require("../models/userData");
const packageData = require("../models/packageData");
const confirmPaymentData = require("../models/confirmPayment");

module.exports = async (req, res) => {
  const UId = req.session.userId;
  const FirstName = req.session.userFirsName;
  const userPosition = req.session.userPosition;
  const userpackage = await packageData
    .find({ userid: req.session.userId })
    .populate("userid");
  const paymentpending = await confirmPaymentData
    .find({ status: "Pending" })
    .count();
  const userprofile = await userData.findById(req.params.id);
  if (req.session.userId) {
    return res.render("userprofile", {
      userprofile,
      UId,
      FirstName,
      userPosition,
      userpackage,
      paymentpending,
    });
  }
  res.redirect("/auth/login");
};
