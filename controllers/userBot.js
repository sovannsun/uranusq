const userData = require("../models/userData");
const confirmPaymentData = require("../models/confirmPayment");

module.exports = async (req, res) => {
  const UId = req.session.userId;
  const FirstName = req.session.userFirsName;
  const userPosition = req.session.userPosition;
  const paymentpending = await confirmPaymentData
    .find({ status: "Pending" })
    .count();
  const spacialData = await userData.findById(req.params.id);
  if (req.session.userId) {
    return res.render("userbot", {
      spacialData,
      UId,
      FirstName,
      userPosition,
      paymentpending,
    });
  }
  res.redirect("/auth/login");
};
