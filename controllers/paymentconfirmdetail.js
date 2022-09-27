const confirmPaymentData = require("../models/confirmPayment");

module.exports = async (req, res) => {
  const FirstName = req.session.userFirsName;
  const userPosition = req.session.userPosition;
  const paymentpending = await confirmPaymentData
    .find({ status: "Pending" })
    .count();
  const paymentconfirmationdata = await confirmPaymentData.findById(
    req.params.id
  );
  if (req.session.userId && req.session.userPosition == "Admin") {
    return res.render("paymentconfirmdetail", {
      FirstName,
      userPosition,
      paymentpending,
      paymentconfirmationdata,
    });
  }
  res.redirect("/auth/login");
};
