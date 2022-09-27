const userData = require("../models/userData");
const packageData = require("../models/packageData");
const confirmPaymentData = require("../models/confirmPayment");

module.exports = async (req, res) => {
  const FirstName = req.session.userFirsName;
  const userPosition = req.session.userPosition;
  const alladmin = await userData.find({ position: "Admin" });
  const allwaitingpackage = await packageData
    .find({ payment: "Waiting" })
    .count();
  const paymentpending = await confirmPaymentData
    .find({ status: "Pending" })
    .count();
  if (req.session.userId && req.session.userPosition == "Admin") {
    return res.render("admin", {
      FirstName,
      userPosition,
      alladmin,
      allwaitingpackage,
      paymentpending,
    });
  }
  res.redirect("/auth/login");
};
