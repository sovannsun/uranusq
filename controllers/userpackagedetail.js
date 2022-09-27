const packageData = require("../models/packageData");
const confirmPaymentData = require("../models/confirmPayment");

module.exports = async (req, res) => {
  const UId = req.session.userId;
  const FirstName = req.session.userFirsName;
  const userPosition = req.session.userPosition;
  const paymentpending = await confirmPaymentData
    .find({ status: "Pending" })
    .count();
  const packagedetail = await packageData
    .findById(req.params.id)
    .populate("userid");
  if (req.session.userId) {
    return res.render("userpackagedetail", {
      UId,
      FirstName,
      userPosition,
      paymentpending,
      packagedetail,
    });
  }
  res.redirect("/auth/login");
};
