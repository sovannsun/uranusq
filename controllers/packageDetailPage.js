const packageData = require("../models/packageData");
const confirmPaymentData = require("../models/confirmPayment");

module.exports = async (req, res) => {
  const FirstName = req.session.userFirsName;
  const userPosition = req.session.userPosition;
  const allwaitingpackage = await packageData
    .find({ payment: "Waiting" })
    .count();
  const packagedetail = await packageData
    .findById(req.params.id)
    .populate("userid");
  const paymentpending = await confirmPaymentData
    .find({ status: "Pending" })
    .count();
  if (req.session.userId && req.session.userPosition == "Admin") {
    return res.render("packagedetail", {
      packagedetail,
      FirstName,
      userPosition,
      allwaitingpackage,
      paymentpending,
    });
  }
  res.redirect("/auth/login");
};
